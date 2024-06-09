import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="w-full font-jetbrains">
      <Container className="dark:text-vm-100/50 text-vm-900/50 flex gap-2 justify-center">
          <p>Semea Tech, © Todos os direitos reservados</p>
      </Container>
    </footer>
  )
}