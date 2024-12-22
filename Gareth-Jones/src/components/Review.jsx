import ReviewCard from './ReviewCard'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const reviews = [
  {
    content:
      'Was always a treat to observe your humour. Good fun) Thank you for being a good team mate on that project we worked together and keep it fun as you do!',
    name: 'Aleksei',
    imgSrc: '/src/assets/images/male-avatar.jpg',
    company: 'Dev-Academy',
  },
  {
    content:
      ' Great working with you Gareth always fun and a laugh to be had, hit me up if you&apos;re ever down south and we&apos;ll get a beer!',
    name: 'Thomas-C',
    imgSrc: 'src/assets/images/maleAvatar2.jpg',
    company: 'Dev-Academy',
  },
  {
    content:
      'Had a lot of fun working with you, thanks for always bringing good vibes and great comedy :)',
    name: 'Tyaan',
    imgSrc: '/src/assets/images/animalAvatar.jpg',
    company: 'Dev-Academy',
  },
  {
    content:
      'Heya Gareth, You&apos;ve been a ray of sunshine for the cohort. I really appreciate your humour and contributions in cohort discussions. It was great to have you on the team for our final project.Good effort man A real Good Cooper Nanotube! ',
    name: 'Zak',
    imgSrc: 'src/assets/images/maleAvatar2.jpg',
    company: 'Dev-Academy',
  },
  {
    content:
      'It was great to work with you bro, you have a great sense of humor, always crack me up i wish you good luck in your career bro',
    name: 'Oscar',
    imgSrc: '/src/assets/images/male-avatar.jpg',
    company: 'Dev-Academy',
  },
  {
    content:
      'Thanks for always making us laugh, from the first day we meet. Im wishing you all the best in life I hope your coding career keeps you happy, keep up the good work!',
    name: 'Lucy',
    imgSrc: '/src/assets/images/girlAvatar2.jpg',
    company: 'Dev-Academy',
  },
  {
    content:
      'Gareths kindness and knack for bringing laughter make him not only a skilled developer but also someone people truly enjoy working with.',
    name: 'Alice',
    imgSrc: '/src/assets/images/girlAvatar.jpg',
    company: 'Dev-Academy',
  },
  {
    content:
      'Gareths passion for coding and genuine desire to make a positive impact are evident in everything he works on ',
    name: 'Tim',
    imgSrc: '/src/assets/images/animalAvatar.jpg',
    company: 'Dev-Academy',
  },
]

const Review = () => {
  useGSAP(() => {
    gsap.to('.scrub-slide', {
      scrollTrigger: {
        trigger: 'scrub-slide',
        scrub: true,
        start: '-200% 80%',
        end: '400% 80%',
      },
      x: '-1000',
    })
  })

  return (
    <section className="section overflow-hidden" id="reviews">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">
          What People have said about me
        </h2>
        <div className="scrub-slide flex items-stretch gap-3 w-fit">
          {reviews.map(({ content, name, imgSrc, company }, key) => (
            <ReviewCard
              key={key}
              name={name}
              imgSrc={imgSrc}
              company={company}
              content={content}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
export default Review
