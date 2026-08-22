// main.js - interactive metric animations and reveal effects
// (unchanged behavior, count-up uses data-value attributes)
document.addEventListener('DOMContentLoaded', function(){
  // reveal on scroll
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('is-visible')
        if(e.target.classList.contains('interactive') && e.target.dataset.animate === 'true'){
          // find counters inside
          e.target.querySelectorAll('.count').forEach(el=>animateCount(el))
        }
        io.unobserve(e.target)
      }
    })
  },{threshold:0.15})

  document.querySelectorAll('.reveal').forEach(el=>io.observe(el))
  document.querySelectorAll('.interactive').forEach(el=>io.observe(el))

  // count up animation
  function animateCount(el){
    const to = parseInt(el.dataset.value || el.textContent.replace(/[^0-9]/g,''),10) || 0
    const duration = 1200
    const start = 0
    const startTime = performance.now()
    requestAnimationFrame(function step(now){
      const progress = Math.min((now - startTime)/duration,1)
      const value = Math.floor(progress * (to - start) + start)
      if(el.textContent.trim().startsWith('$')){
        el.textContent = '$' + value.toLocaleString()
      } else {
        el.textContent = value.toLocaleString()
      }
      if(progress < 1) requestAnimationFrame(step)
    })
  }

  // set year
  const y = document.getElementById('year')
  if(y) y.textContent = new Date().getFullYear()

  // smooth scroll for anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (ev)=>{
      const href = a.getAttribute('href')
      if(href && href.startsWith('#')){
        ev.preventDefault()
        const el = document.querySelector(href)
        if(el) el.scrollIntoView({behavior:'smooth',block:'start'})
      }
    })
  })

})
