// main.js - adds logos carousel auto-scroll and header collapse on scroll
(function(){
  document.addEventListener('DOMContentLoaded', ()=>{
    // Respect reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Logos carousel - continuous scroll implemented via translateX loop
    const logosTrack = document.getElementById('logos-track')
    if(logosTrack && !prefersReduced){
      // duplicate items to allow seamless scroll
      const items = Array.from(logosTrack.children)
      items.forEach(node => logosTrack.appendChild(node.cloneNode(true)))

      let px = 0
      const speed = 40 // pixels per second
      let last = performance.now()
      let paused = false

      const animate = (t)=>{
        if(paused) { last = t; requestAnimationFrame(animate); return }
        const dt = (t - last)/1000
        last = t
        px += speed * dt
        if(px > logosTrack.scrollWidth/2) px = 0
        logosTrack.style.transform = `translateX(${-px}px)`
        requestAnimationFrame(animate)
      }

      // pause on hover/focus
      logosTrack.parentElement.addEventListener('mouseenter', ()=> paused = true)
      logosTrack.parentElement.addEventListener('mouseleave', ()=> paused = false)
      logosTrack.parentElement.addEventListener('focusin', ()=> paused = true)
      logosTrack.parentElement.addEventListener('focusout', ()=> paused = false)

      requestAnimationFrame(animate)
    }

    // Header collapse behavior: observe sentinel after hero
    const header = document.getElementById('site-header')
    const sentinel = document.getElementById('hero-sentinel')
    if(header && sentinel){
      const io = new IntersectionObserver((entries)=>{
        entries.forEach(e=>{
          if(!e.isIntersecting){
            header.classList.add('collapsed')
          } else {
            header.classList.remove('collapsed')
          }
        })
      },{threshold:0})
      io.observe(sentinel)
    }

    // Intersection reveal + interactive counter logic (existing behavior)
    const io2 = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.classList.add('is-visible')
          if(e.target.classList.contains('interactive') && e.target.dataset.animate === 'true'){
            e.target.querySelectorAll('.count').forEach(el=>animateCount(el))
          }
          io2.unobserve(e.target)
        }
      })
    },{threshold:0.15})

    document.querySelectorAll('.reveal').forEach(el=>io2.observe(el))
    document.querySelectorAll('.interactive').forEach(el=>io2.observe(el))

    function animateCount(el){
      const to = parseInt(el.dataset.value || el.textContent.replace(/[^0-9]/g,''),10) || 0
      const duration = 1200
      const start = 0
      const startTime = performance.now()
      requestAnimationFrame(function step(now){
        const progress = Math.min((now - startTime)/duration,1)
        const value = Math.floor(progress * (to - start) + start)
        // keep $ if original contained it
        const prefix = el.textContent.trim().startsWith('$') || el.textContent.trim().startsWith('+ $') ? (el.textContent.trim().startsWith('+')?'+ $':'$') : ''
        if(prefix) el.textContent = prefix + value.toLocaleString()
        else el.textContent = value.toLocaleString()
        if(progress < 1) requestAnimationFrame(step)
      })
    }

    // set year
    const y = document.getElementById('year')
    if(y) y.textContent = new Date().getFullYear()

    // smooth scroll for anchors (respect reduced motion)
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', (ev)=>{
        const href = a.getAttribute('href')
        if(href && href.startsWith('#')){
          ev.preventDefault()
          const el = document.querySelector(href)
          if(el) el.scrollIntoView({behavior: prefersReduced ? 'auto' : 'smooth',block:'start'})
        }
      })
    })

  })
})();
