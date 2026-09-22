import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { BrandMark } from "./BrandMark";
import { FAQ } from "./FAQ";
import { MotionController } from "./MotionController";
import { heroVariants, outcomes, workshopBlocks } from "../content/site-content";

type Variant = keyof typeof heroVariants;

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M14 7l5 5-5 5" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12 4.2 4.2L19 6.8" />
    </svg>
  );
}

function PlaneIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="m4 17 10.5-3.5V7.4c0-1 .6-1.9 1.5-2.4.9.5 1.5 1.4 1.5 2.4v6.1L28 17v2l-10.5-1.2v5.1l3.5 2.3v1.4L16 25l-5 1.6v-1.4l3.5-2.3v-5.1L4 19z" />
    </svg>
  );
}

export function SalesPage({ variant }: { variant: Variant }) {
  const hero = heroVariants[variant];

  return (
    <>
      <MotionController />
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <header className="site-header">
        <div className="container nav-wrap">
          <BrandMark />
          <nav aria-label="Navegação principal">
            <a href="#como-funciona">Como funciona</a>
            <a href="#quem-conduz">Quem conduz</a>
            <a href="#faq">Dúvidas</a>
          </nav>
          <a className="button button-small" href="#oferta">
            Ver a oferta
          </a>
        </div>
      </header>

      <main id="conteudo">
        <section className="hero motion-region is-visible" aria-labelledby="hero-title">
          <div className="hero-grid-lines continuous" aria-hidden="true" />
          <div className="ambient-orb ambient-orb-one continuous" aria-hidden="true" />
          <div className="ambient-orb ambient-orb-two continuous" aria-hidden="true" />
          <div className="container hero-layout">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow">Workshop ao vivo para famílias brasileiras na Europa</p>
              <h1 id="hero-title">{hero.title}</h1>
              <p className="hero-lead">{hero.lead}</p>
              <p className="hero-body">{hero.body}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#oferta">
                  {hero.cta}
                  <ArrowIcon />
                </a>
                <span className="microcopy">Pagamento único. Garantia de 7 dias.</span>
              </div>
              <ul className="hero-facts" aria-label="Informações do workshop">
                <li>
                  <strong>1h30</strong>
                  <span>ao vivo</span>
                </li>
                <li>
                  <strong>Zoom</strong>
                  <span>sábado, 20h de Lisboa</span>
                </li>
                <li>
                  <strong>3 dias</strong>
                  <span>de replay</span>
                </li>
              </ul>
            </div>

            <div className="hero-visual" aria-label="Planejamento de uma viagem em família">
              <div className="hero-photo-frame">
                <Image
                  src="/images/planejamento-viagem.webp"
                  alt="Mãos organizando o orçamento de uma viagem em família sobre uma mesa"
                  priority
                  fill
                  sizes="(max-width: 820px) 92vw, 46vw"
                />
              </div>
              <div className="floating-note floating-note-top">
                <span>Destino</span>
                <strong>um desejo claro</strong>
              </div>
              <div className="floating-note floating-note-bottom">
                <span>Próxima ação</span>
                <strong>uma decisão possível</strong>
              </div>
              <div className="route-orbit continuous" aria-hidden="true">
                <PlaneIcon />
              </div>
            </div>
          </div>
          <div className="hero-marquee" aria-hidden="true">
            <div className="continuous">
              <span>custo total</span>
              <i />
              <span>calendário</span>
              <i />
              <span>meta mensal</span>
              <i />
              <span>próxima ação</span>
              <i />
              <span>custo total</span>
              <i />
              <span>calendário</span>
              <i />
              <span>meta mensal</span>
              <i />
              <span>próxima ação</span>
            </div>
          </div>
        </section>

        <section className="section problem-section motion-region">
          <div className="container narrow reveal">
            <p className="eyebrow">O que mantém a viagem no campo da vontade</p>
            <h2>Você não precisa de mais 20 abas abertas.</h2>
            <p className="section-lead">
              Você salva um voo, abre um hotel, compara uma promoção, pergunta num grupo,
              fecha tudo e promete voltar depois. No fim, a viagem continua existindo mais
              na cabeça do que no calendário.
            </p>
          </div>
          <div className="container browser-chaos reveal" aria-label="Tentativas soltas que não formam um plano">
            <article style={{ "--order": 0 } as CSSProperties}>
              <span className="card-number">01</span>
              <strong>Passagem barata</strong>
              <p>Não mostra quanto a família inteira vai gastar.</p>
            </article>
            <article style={{ "--order": 1 } as CSSProperties}>
              <span className="card-number">02</span>
              <strong>Vídeo sobre milhas</strong>
              <p>Não escolhe quando ir e nem quanto guardar.</p>
            </article>
            <article style={{ "--order": 2 } as CSSProperties}>
              <span className="card-number">03</span>
              <strong>Roteiro pronto</strong>
              <p>Não cabe automaticamente na rotina da sua família.</p>
            </article>
          </div>
        </section>

        <section className="section logic-section motion-region" id="como-funciona">
          <div className="container logic-layout">
            <div className="logic-copy reveal">
              <p className="eyebrow">A nova lógica</p>
              <h2>Milha é moeda. Plano é método.</h2>
              <p>
                Primeiro você transforma o destino desejado em um número compreensível.
                Depois, coloca esse número no calendário. Só então decide como pesquisar,
                comparar e reservar.
              </p>
              <div className="method-label">Método Viagem Possível</div>
            </div>
            <div className="route-map reveal" aria-label="As três etapas do Método Viagem Possível">
              <svg className="route-path" viewBox="0 0 620 260" aria-hidden="true">
                <path className="route-path-base" d="M42 198C140 44 248 240 350 98c66-92 133-22 228-62" />
                <path className="route-path-live" d="M42 198C140 44 248 240 350 98c66-92 133-22 228-62" />
              </svg>
              <article className="route-stop route-stop-one">
                <span>1</span>
                <strong>Destrava</strong>
                <p>Tira o “deve ser caro demais” e coloca o custo na tela.</p>
              </article>
              <article className="route-stop route-stop-two">
                <span>2</span>
                <strong>Desenha</strong>
                <p>Organiza orçamento, calendário, ritmo da família e meta mensal.</p>
              </article>
              <article className="route-stop route-stop-three">
                <span>3</span>
                <strong>Decola</strong>
                <p>Executa as decisões sem depender de uma promoção para começar.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section workshop-section motion-region">
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <p className="eyebrow">O que acontece ao vivo</p>
                <h2>1h30 para sair do “por onde começo?”</h2>
              </div>
              <p>
                A aula alterna explicação, números em euros e aplicação prática para você
                enxergar a viagem como uma sequência de decisões.
              </p>
            </div>
            <div className="workshop-grid reveal">
              {workshopBlocks.map(([number, title, text], index) => (
                <article key={number} style={{ "--order": index } as CSSProperties}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section result-section motion-region">
          <div className="container result-layout">
            <div className="result-title reveal">
              <p className="eyebrow">Resultado imediato</p>
              <h2>Você não sai com mais informação solta.</h2>
              <p>Você sai com um mapa de decisão para a viagem que quer fazer.</p>
            </div>
            <ul className="outcome-list reveal">
              {outcomes.map((outcome, index) => (
                <li key={outcome} style={{ "--order": index } as CSSProperties}>
                  <span>
                    <CheckIcon />
                  </span>
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section audience-section motion-region">
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <p className="eyebrow">Para quem é</p>
                <h2>Para quem quer uma decisão, não uma promessa.</h2>
              </div>
              <p>
                O workshop foi pensado para famílias com orçamento limitado, pouco tempo
                para pesquisar e vontade de colocar a viagem em movimento.
              </p>
            </div>
            <div className="audience-columns reveal">
              <article className="audience-yes">
                <p className="audience-kicker">Faz sentido se você</p>
                <ul>
                  <li>Mora na Europa e quer planejar uma viagem em família.</li>
                  <li>Adia porque ninguém sabe quanto ela realmente custaria.</li>
                  <li>Prefere ver contas, exemplos e decisões montados ao vivo.</li>
                  <li>Quer sair com um primeiro passo concreto.</li>
                </ul>
              </article>
              <article className="audience-no">
                <p className="audience-kicker">Não é a melhor escolha se você</p>
                <ul>
                  <li>Procura uma agência que compre tudo por você.</li>
                  <li>Quer apenas técnicas avançadas de milhas e cartões.</li>
                  <li>Busca promessa de preço mínimo ou economia garantida.</li>
                  <li>Não pretende participar da parte prática.</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section authority-section motion-region" id="quem-conduz">
          <div className="container authority-layout">
            <div className="authority-visual reveal">
              <Image
                src="/images/historia-viagens.webp"
                alt="Caderno de viagem com uma rota entre o Brasil, Portugal e outros destinos europeus"
                fill
                sizes="(max-width: 820px) 92vw, 48vw"
              />
              <div className="authority-stamp">
                <strong>8 anos</strong>
                <span>vivendo em Portugal</span>
              </div>
            </div>
            <div className="authority-copy reveal">
              <p className="eyebrow">Quem conduz</p>
              <h2>Grazi ensina a partir da vida que construiu.</h2>
              <p>
                Brasileira de Porto Alegre, Grazi cresceu em uma realidade em que viajar
                era raro. Depois de se mudar para Portugal e formar sua família, transformou
                pesquisa, comparação e escolhas em um jeito prático de manter as viagens no calendário.
              </p>
              <p>
                Seus filhos já conheceram destinos como Disney Paris e Warner Madrid, em uma
                trajetória familiar que passou por 12 países. É essa experiência vivida que ela
                abre na tela: números, decisões e o processo que usa com a própria família.
              </p>
              <blockquote>
                “Eu não queria que meus filhos crescessem com a mesma sensação de que isto não é para a gente.”
              </blockquote>
            </div>
          </div>
        </section>

        <section className="section offer-section motion-region" id="oferta">
          <div className="container">
            <div className="offer-heading reveal">
              <p className="eyebrow">Workshop Viagem Possível ao Vivo</p>
              <h2>Uma noite para organizar o que hoje está espalhado.</h2>
              <p>
                Encontro ao vivo no Zoom, folha-base para o orçamento, replay por 3 dias
                e pagamento único.
              </p>
            </div>

            <div className="batch-table reveal" aria-label="Comparação dos três lotes">
              <article className="batch-card batch-current">
                <div className="batch-state">
                  <span className="status-dot continuous" />
                  Agora
                </div>
                <p>Lote 1</p>
                <strong>17 €</strong>
                <span>pagamento único</span>
              </article>
              <article className="batch-card">
                <div className="batch-state">Depois</div>
                <p>Lote 2</p>
                <strong>37 €</strong>
                <span>pagamento único</span>
              </article>
              <article className="batch-card">
                <div className="batch-state">Final</div>
                <p>Lote 3</p>
                <strong>77 €</strong>
                <span>pagamento único</span>
              </article>
            </div>

            <div className="offer-details reveal" id="detalhes">
              <div className="offer-main">
                <p className="offer-label">Sua inscrição inclui</p>
                <ul>
                  <li><CheckIcon /> Encontro ao vivo de 1h30 no Zoom</li>
                  <li><CheckIcon /> Folha-base usada durante a aula</li>
                  <li><CheckIcon /> Aplicação prática do orçamento da viagem</li>
                  <li><CheckIcon /> Replay disponível por 3 dias</li>
                  <li><CheckIcon /> Apresentação opcional do programa de 12 semanas</li>
                </ul>
              </div>
              <div className="offer-price">
                <span>Hoje no lote 1</span>
                <strong>17 €</strong>
                <small>sem assinatura</small>
                <a className="button button-primary" href="#faq">
                  Tirar minhas dúvidas
                  <ArrowIcon />
                </a>
                <p>A compra será concluída no ambiente seguro de pagamento.</p>
              </div>
            </div>

            <div className="guarantee reveal">
              <div className="guarantee-seal" aria-label="Garantia de 7 dias">
                <span className="guarantee-seal__label">Garantia</span>
                <strong className="guarantee-seal__number">7</strong>
                <span className="guarantee-seal__unit">dias</span>
              </div>
              <div>
                <p className="eyebrow">Decida com tranquilidade</p>
                <h3>Você tem 7 dias de garantia.</h3>
                <p>
                  Entre, conheça a proposta e avalie se o workshop faz sentido para você.
                  A oferta prevê garantia de 7 dias.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section faq-section motion-region" id="faq">
          <div className="container faq-layout">
            <div className="faq-heading reveal">
              <p className="eyebrow">Antes de decidir</p>
              <h2>Perguntas que merecem resposta clara.</h2>
              <p>
                Sem promessa de preço mínimo, sem assinatura e sem fazer parecer que uma
                aula substitui todas as decisões da família.
              </p>
            </div>
            <div className="reveal">
              <FAQ />
            </div>
          </div>
        </section>

        <section className="closing-section motion-region">
          <div className="closing-route continuous" aria-hidden="true">
            <svg viewBox="0 0 900 220">
              <path d="M10 178C175 20 303 242 468 82c126-122 262 82 420-64" />
            </svg>
          </div>
          <div className="container closing-content reveal">
            <p className="eyebrow">A viagem não precisa começar pela compra</p>
            <h2>Ela pode começar por uma conta que faça sentido para a sua família.</h2>
            <p>
              Em 1h30, você organiza custo, prazo, prioridades e próxima ação. Depois,
              decide olhando para um plano, não para um palpite.
            </p>
            <a className="button button-light" href="#oferta">
              Ver tudo que está incluído
              <ArrowIcon />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <BrandMark />
          <p>Workshop Viagem Possível ao Vivo</p>
          <nav aria-label="Links do rodapé">
            <Link href="/a1">Página inicial</Link>
            <a href="#faq">Perguntas frequentes</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
