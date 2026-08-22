// main.js - mobile nav toggle, reveal animations, smooth scroll
document.addEventListener('DOMContentLoaded', function(){
  // nav toggle for small screens
  const toggle = document.querySelector('.nav-toggle')
  const nav = document.querySelector('.center-nav')
  if(toggle && nav){
    toggle.addEventListener('click', ()=> nav.classList.toggle('open'))
  }

  // reveal on scroll
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('is-visible')
        io.unobserve(e.target)
      }
    })
  },{threshold:0.12})
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el))

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

  // set year
  const y = document.getElementById('year')
  if(y) y.textContent = new Date().getFullYear()
})
