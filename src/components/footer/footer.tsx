"use client";

import { Container, LeftSection, RightSections, SocialLinks, FooterSection, LegalText } from './styles';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <Container>
      <div className="container m-auto">
        <div className="footer-content">
          {/* Seção Esquerda (Social + Copyright) */}
          <LeftSection>
            <SocialLinks>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
            </SocialLinks>
            
            <LegalText>
              © 2025 DBM Digital. Todos os direitos reservados.
              <br />
              Desenvolvido por Dourado.cash
            </LegalText>
          </LeftSection>

          {/* Seção Direita (2 colunas de links) */}
          <RightSections>
            <FooterSection>
              <h4>Explore</h4>
              <ul>
                <li><a href="/sobre">Sobre nós</a></li>
                <li><a href="/pos">BDM POS</a></li>
                <li><a href="/mapa">BDMAP</a></li>
                <li><a href="/mercado">Mercado BDM</a></li>
              </ul>
            </FooterSection>

            <FooterSection>
              <h4>Recursos</h4>
              <ul>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/suporte">Suporte</a></li>
                <li><a href="/documentacao">Documentação</a></li>
                <li><a href="/api">API</a></li>
              </ul>
            </FooterSection>
          </RightSections>
        </div>
      </div>
    </Container>
  );
}