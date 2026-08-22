// main.js - simple animations and mobile nav
document.addEventListener('DOMContentLoaded', function(){
  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle')
  const nav = document.querySelector('.nav')
  toggle?.addEventListener('click', ()=>{
    nav?.classList.toggle('open')
  })

  // IntersectionObserver for reveal animations
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  },{threshold:0.15})

  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el))

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const href = a.getAttribute('href')
      if(href && href.startsWith('#')){
        e.preventDefault()
        const target = document.querySelector(href)
        if(target) target.scrollIntoView({behavior:'smooth',block:'start'})
      }
    })
  })

  // set year
  const year = document.getElementById('year')
  if(year) year.textContent = new Date().getFullYear()
})
