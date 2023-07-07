type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <div className="container mx-auto px-5 bg-bg-primary fnt-fnt-primary">{children}</div>
}

export default Container
