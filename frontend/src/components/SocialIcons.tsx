

export type SocialMediaType = {
  name: string
  url: string
  icon_url: string
}


type SocialProp = {
    socials: SocialMediaType[]
}

export function SocialMedia({socials}: SocialProp) {
  return (
    <div className="social-icons">
      {socials.map(social => (
        <a 
          key={social.url}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-link"
          title={social.name}
        >
          <img src={social.icon_url} alt={social.name} />
        </a>
      ))}
    </div>
  )
}