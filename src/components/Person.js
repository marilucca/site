import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import {
  container,
  info,
  nameText,
  picture,
} from '../css/components/Person.module.css';

function getTitle({ ga, cargo }) {
  if (cargo === 'Presidente' || cargo === 'Vice-Presidente') {
    return cargo;
  }

  const prep =
    ga === 'Gestão de Talentos' || ga === 'Presidência' ? 'da' : 'de';

  if (cargo === 'Diretor' || cargo === 'Diretora') {
    return `${cargo} ${prep} ${ga}`;
  }

  return `Membro ${cargo} ${prep} ${ga}`;
}

export default function Person({ membro }) {
  const title = getTitle(membro);

  return (
    <div className={container}>
      <GatsbyImage
        image={getImage(membro.memberImage)}
        alt={membro.name}
        className={picture}
      />
      <div className={info}>
        <p className={nameText}>{membro.name}</p>
        {title ? <p>{title}</p> : null}
      </div>
    </div>
  );
}
