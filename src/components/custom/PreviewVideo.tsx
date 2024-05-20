import { Container } from "./Container";

export function PreviewVideo() {
  return (
    <div 
      className="flexgap-2 flex-col flex-wrap border border-postfy-200 dark:border-postfy-800 rounded-lg md:w-postify-lg"
    >
      <video className="max-h-[680px] w-full" src="/videos/teste.mp4" controls />
      <Container>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime aperiam quaerat aspernatur? Minus architecto cum et itaque doloremque cupiditate aspernatur ut sit, id similique deserunt odio eligendi iusto, delectus praesentium?
        </p>
      </Container>
    </div>
  )
}