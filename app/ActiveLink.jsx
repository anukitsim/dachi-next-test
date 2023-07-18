

import { useRouter } from 'next/router'

const ActiveLink = ({ children, href, className }) => {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a 
      href={href} 
      onClick={handleClick} 
      className={`${className} ${router.asPath === href ? 'text-[#909090]' : ''}`}
    >
      {children}
    </a>
  )
}

export default ActiveLink
