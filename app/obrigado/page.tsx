import Link from "next/link";
import { BrandMark } from "../../components/BrandMark";
import { MotionController } from "../../components/MotionController";

export default function ThankYouPage() {
  return (
    <main className="thank-you motion-region">
      <MotionController />
      <div className="ambient-orb ambient-orb-one continuous" aria-hidden="true" />
      <div className="ambient-orb ambient-orb-two continuous" aria-hidden="true" />
      <section className="thank-you-card reveal is-visible" aria-labelledby="thank-you-title">
        <BrandMark />
        <span className="thank-you-check" aria-hidden="true">
          <svg viewBox="0 0 48 48" role="img">
            <path d="M13 25.2 20.4 33 36 16" />
          </svg>
        </span>
        <p className="eyebrow">Tudo certo</p>
        <h1 id="thank-you-title">Sua próxima viagem já começou no papel.</h1>
        <p className="thank-you-lead">
          A confirmação e as orientações de acesso chegam no e-mail usado na inscrição.
          Guarde essa mensagem e verifique também a caixa de spam.
        </p>
        <ol className="next-steps" aria-label="Próximos passos">
          <li>
            <span>1</span>
            <div>
              <strong>Confira a confirmação</strong>
              <p>Abra o e-mail de inscrição e confirme os dados do encontro.</p>
            </div>
          </li>
          <li>
            <span>2</span>
            <div>
              <strong>Separe seu destino desejado</strong>
              <p>Chegue à aula com uma viagem em mente para aproveitar a parte prática.</p>
            </div>
          </li>
          <li>
            <span>3</span>
            <div>
              <strong>Reserve 1h30 na agenda</strong>
              <p>Tenha papel, caneta e disposição para colocar os números na mesa.</p>
            </div>
          </li>
        </ol>
        <p className="thank-you-note">
          O replay ficará disponível por 3 dias depois do encontro.
        </p>
        <Link className="button button-primary" href="/a1">
          Voltar para a página do workshop
        </Link>
      </section>
    </main>
  );
}
