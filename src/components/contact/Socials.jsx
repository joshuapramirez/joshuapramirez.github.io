import './socials.scss'

export default function Socials({ isPhone }) {
  if (isPhone) return null

  return (
    <div className='socials'>
      <a href='https://github.com/joshuapramirez' title='Github'>
        <i class="fab fa-github"></i>
      </a>
      <a href='mailto: joshuapramirez1@gmail.com' title='Mail'>
        <i class="far fa-envelope"></i>
      </a>
      <a href='https://www.linkedin.com/in/joshua-ramirez-9b604712b/' title='LinkedIn'>
        <i class="fab fa-linkedin"></i>
      </a>
      <a  href="files/Joshua-Resume.pdf" title='Resume'>
        <i class="far fa-id-card"></i>
      </a>
    </div>
  )
}