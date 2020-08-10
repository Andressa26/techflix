import React from 'react';
import { Link } from 'react-router-dom';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';
import IconGit from '../../assets/img/icongit.png';
import IconLinkedin from '../../assets/img/iconlinkedin.png';

function Footer() {
  return (
    <FooterBase>
      <Link to="/">
        <img className="Logo" src={Logo} alt="TechFlix logo" />
      </Link>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
        por Andressa Rodrigues
      </p>
      <p>
        <a href="https://github.com/Andressa26/">
          <img height="40px" src={IconGit} alt="Ícone GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/andressa--rodrigues/">
          <img height="40px" src={IconLinkedin} alt="Ícone Linkedin" />
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
