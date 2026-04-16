import heroImage from '../assets/chico-hero.png';
import restingImage from '../assets/chico-resting.png';
import closeupImage from '../assets/chico-closeup.png';
import reportImage from '../assets/doc-report.png';
import budgetImage from '../assets/doc-budget.png';
import xrayImage from '../assets/Chico RaioX.jpg';
import casePhotoImage from '../assets/doc-case-photo.png';
import pixQrCodeImage from '../assets/pix-qr-placeholder.png';

export type NavigationLink = {
  label: string;
  href: string;
};

export type MediaItem = {
  src: string;
  alt: string;
};

export type EvidenceItem = {
  title: string;
  description: string;
  tag: string;
  image: string;
  alt: string;
  actionLabel?: string;
  href?: string;
};

export type UpdateItem = {
  date: string;
  title: string;
  description: string;
  tag: string;
};

export type PrizeItem = {
  position: string;
  description: string;
  value: number;
};

const goalAmount = 10000;
const raisedAmount = 0;
const remainingAmount = Math.max(goalAmount - raisedAmount, 0);

const galleryImages: MediaItem[] = [
  {
    src: heroImage,
    alt: 'Ilustração principal do Chico com expressão tranquila.'
  },
  {
    src: restingImage,
    alt: 'Ilustração do Chico descansando durante a recuperação.'
  },
  {
    src: closeupImage,
    alt: 'Close ilustrado do rosto do Chico.'
  }
];

const evidenceDocuments: EvidenceItem[] = [
  {
    title: 'Laudo veterinário inicial',
    description:
      'Resumo do atendimento com indicação de lesão importante na patela e necessidade de avaliação cirúrgica.',
    tag: 'Laudo',
    image: reportImage,
    alt: 'Placeholder de laudo veterinário do Chico.',
    actionLabel: 'Ver documento',
    href: 'https://drive.google.com/file/d/1C-KSsmjrxg-q8w-L6lEpn99GAxgeQgSq/view?usp=drive_link'
  },
  {
    title: 'Orçamento da cirurgia',
    description:
      'Estimativa com cirurgia ortopédica, medicação, anestesia e cuidados clínicos pós-procedimento.',
    tag: 'Orçamento',
    image: budgetImage,
    alt: 'Placeholder de orçamento veterinário da cirurgia do Chico.',
    actionLabel: 'Ver orçamento',
    href: 'https://drive.google.com/drive/folders/119Kuhw53HTuEPcHGSD-7aAhzsAkLWpLw?usp=drive_link'
  },
  {
    title: 'Exames de imagem',
    description:
      'Espaço preparado para anexar radiografias, exames complementares e registros da evolução do caso.',
    tag: 'Exames',
    image: xrayImage,
    alt: 'Placeholder de exames de imagem do Chico.',
    actionLabel: 'Ampliar',
    href: xrayImage
  },
  {
    title: 'Registro visual do caso',
    description:
      'Área reservada para fotos do Chico no atendimento e durante a recuperação, mantendo a prestação de contas organizada.',
    tag: 'Imagens',
    image: casePhotoImage,
    alt: 'Placeholder de registro visual do caso do Chico.',
    actionLabel: 'Abrir imagem',
    href: casePhotoImage
  }
];

export const campaignData = {
  seo: {
    title: 'Ajude o Chico a voltar a andar',
    description:
      'Landing page solidária para arrecadar recursos para a cirurgia, exames e tratamento do gato Chico após um acidente.',
    url: 'https://ajudeochico.vercel.app',
    ogImage: '/og-cover.svg'
  },
  brand: {
    name: 'Chico',
    badge: 'Campanha solidária',
    ownerName: 'Matheus Mendes'
  },
  labels: {
    menuAriaLabel: 'Abrir menu de navegação',
    closeMenuAriaLabel: 'Fechar menu de navegação',
    navigationAriaLabel: 'Navegação principal',
    externalLinkLabel: 'Abre em nova aba',
    pixCopied: 'Chave copiada com sucesso.',
    linkCopied: 'Link copiado com sucesso.',
    pixUnavailable: 'Não foi possível copiar a chave Pix agora.',
    linkUnavailable: 'Não foi possível copiar o link agora.'
  },
  navigation: [
    { label: 'História', href: '#historia' },
    { label: 'Provas', href: '#provas' },
    { label: 'Meta', href: '#meta' },
    { label: 'Como ajudar', href: '#ajudar' },
    { label: 'Rifa', href: '#rifa' },
    { label: 'Atualizações', href: '#atualizacoes' }
  ] satisfies NavigationLink[],
  hero: {
    eyebrow: 'Tratamento ortopédico urgente',
    title: 'Ajude o Chico a voltar a andar com segurança e sem dor',
    subtitle:
      'Depois de um acidente, o Chico rompeu três ligamentos da patela e agora precisa de cirurgia, exames e acompanhamento veterinário.',
    description:
      'Criei esta página para concentrar todas as informações da campanha com clareza, provas do caso e maneiras rápidas de ajudar.',
    image: galleryImages[0],
    cards: [
      {
        label: 'Meta da campanha',
        description: 'Cirurgia, exames, medicação e pós-operatório.'
      },
      {
        label: 'Arrecadado até agora',
        description: 'Atualizado manualmente no arquivo central da campanha.'
      },
      {
        label: 'Clínica responsável',
        description: 'PetSimVet'
      }
    ],
    actions: {
      donateNowLabel: 'Doar agora',
      pixLabel: 'Fazer Pix',
      storyLabel: 'Ver a história'
    },
    trustItems: [
      {
        icon: 'shield',
        title: 'Campanha clara',
        description: 'Informações, provas e contatos em um só lugar.'
      },
      {
        icon: 'pulse',
        title: 'Tratamento completo',
        description: 'Cirurgia, exames, remédios e recuperação.'
      },
      {
        icon: 'landmark',
        title: 'Três formas de ajudar',
        description: 'Vakinha, Pix e rifa solidária.'
      }
    ],
    trustNote:
      'Toda contribuição ajuda a aproximar o Chico da cirurgia e da recuperação completa.'
  },
  about: {
    id: 'historia',
    eyebrow: 'Quem é o Chico',
    title: 'Um companheiro carinhoso, curioso e muito amado em casa',
    description:
      'O Chico é daqueles gatos que acompanham tudo de perto: fica por perto quando alguém senta no sofá, pede carinho com a cabeça e transforma a rotina da casa em algo mais leve.',
    paragraphs: [
      'Ele sempre foi ativo, brincalhão e presente em cada cantinho. Ver o Chico sem conseguir se apoiar direito, com dor e limitação para andar, foi um choque para toda a família.',
      'Esta campanha existe para dar a ele uma chance real de voltar a caminhar com conforto, fazer o tratamento certo e se recuperar com dignidade.'
    ],
    highlightsTitle: 'Por que o Chico importa',
    highlights: [
      'Gato idoso, muito dócil e acostumado com rotina dentro de casa.',
      'Sempre foi ativo e independente, então a perda de mobilidade mudou completamente o dia a dia dele.',
      'A família está reunindo documentos, exames e atualizações para manter a campanha transparente.'
    ],
    images: galleryImages.slice(1)
  },
  accident: {
    id: 'acidente',
    eyebrow: 'O que aconteceu',
    title: 'O Chico sofreu um acidente e teve a mobilidade comprometida',
    intro:
      'Após o acidente, ele passou a apresentar dor, dificuldade para apoiar a pata e limitação importante para andar normalmente.',
    facts: [
      'Foi identificado rompimento de três ligamentos da patela.',
      'A instabilidade na perna afetou diretamente a locomoção do Chico.',
      'O caso exige cirurgia, exames complementares e acompanhamento veterinário.',
      'O tratamento não envolve só a operação: inclui medicação, retorno clínico e recuperação pós-operatória.',
      'A orientação recebida é agir com agilidade para reduzir sofrimento e evitar piora do quadro.'
    ],
    urgencyTitle: 'Por que a ajuda é urgente',
    urgencyText:
      'Quanto antes o tratamento for realizado, maior a chance de o Chico voltar a se movimentar com mais conforto e menos risco de sequelas.',
    supportTitle: 'Tratamento com várias etapas',
    supportText:
      'O valor da campanha foi pensado para cobrir não apenas a cirurgia, mas também exames, medicação e o processo de recuperação clínica do Chico.'
  },
  clinic: {
    name: 'PetSimVet',
    description:
      'Estrutura veterinária responsável pela avaliação ortopédica, exames e condução cirúrgica do caso.'
  },
  goal: {
    id: 'meta',
    eyebrow: 'Meta e progresso',
    title: 'Meta de arrecadação',
    description:
      'A meta cobre cirurgia, exames, medicação, deslocamentos e o período de recuperação do Chico.',
    goalAmount,
    raisedAmount,
    remainingAmount,
    labels: {
      goal: 'Valor total necessário',
      raised: 'Valor arrecadado',
      remaining: 'Valor que falta',
      progress: 'Percentual da meta'
    },
    note:
      'Se o valor arrecadado ultrapassar a meta, o excedente será usado nos custos veterinários complementares e atualizado na prestação de contas.'
  },
  help: {
    id: 'ajudar',
    eyebrow: 'Como ajudar',
    title: 'Três caminhos simples para ajudar o Chico agora',
    description:
      'Você pode contribuir pela Vakinha, fazer um Pix direto ou participar da rifa solidária. Todas as formas de apoio ajudam no tratamento.',
    vakinha: {
      badge: 'Plataforma externa',
      title: 'Doação pela Vakinha',
      description:
        'Ideal para quem prefere contribuir por uma plataforma conhecida e com compartilhamento fácil.',
      buttonLabel: 'Doar pela Vakinha',
      link: 'https://www.vakinha.com.br/vaquinha/ajude-o-chico-matheus-mendes-de-almeida'
    },
    pix: {
      badge: 'Doação direta',
      title: 'Doação por Pix',
      description:
        'Para quem quer doar em poucos segundos. A chave pode ser copiada com um toque e o QR Code fica pronto para atualização.',
      keyLabel: 'Chave Pix',
      key: 'matheusmendesdealmeida1@gmail.com',
      copyLabel: 'Copiar chave Pix',
      copiedLabel: 'Chave copiada',
      qrCodeLabel: 'QR Code Pix',
      qrCode: pixQrCodeImage,
      qrCodeAlt: 'QR Code Pix',
      note: 'Escaneie o QR Code ou copie a chave Pix.'
    },
    whatsappPrompt:
      'Se preferir, fale direto comigo para confirmar detalhes da campanha, da rifa ou do tratamento.',
    whatsappButtonLabel: 'Falar com o tutor no WhatsApp',
    whatsappMessage: 'Oi! Quero ajudar o Chico e tirar uma dúvida rápida sobre a campanha.'
  },
  raffle: {
    id: 'rifa',
    eyebrow: 'Rifa solidária',
    title: 'Participar da rifa também ajuda no tratamento do Chico',
    description:
      'Cada número vendido contribui para custear cirurgia, exames e recuperação. É uma forma acessível de participar e ainda concorrer a prêmios em Pix.',
    pricePerNumber: 10,
    totalNumbers: 1000,
    drawDate: '30 de maio de 2026',
    badge: 'Rifa ativa',
    labels: {
      pricePerNumber: 'Valor por número',
      totalNumbers: 'Quantidade total',
      drawDate: 'Data do sorteio',
      totalNumbersSuffix: 'números'
    },
    prizes: [
      {
        position: '1º prêmio',
        description: 'Pix para o vencedor',
        value: 250
      },
      {
        position: '2º prêmio',
        description: 'Pix para o vencedor',
        value: 175
      },
      {
        position: '3º prêmio',
        description: 'Pix para o vencedor',
        value: 100
      }
    ] satisfies PrizeItem[],
    buttonLabel: 'Falar no WhatsApp',
    whatsappMessage: 'Oi! Quero participar da rifa solidária do Chico.',
    note:
      'Os detalhes da rifa podem ser ajustados no arquivo central caso você altere valor, quantidade de números ou data do sorteio.'
  },
  evidence: {
    id: 'provas',
    eyebrow: 'Provas e credibilidade',
    title: 'Tudo organizado para dar segurança a quem quiser ajudar',
    description:
      'A campanha foi pensada para transmitir transparência: laudos, orçamento, exames e registros do caso ficam reunidos em um só lugar.',
    items: evidenceDocuments
  },
  updates: {
    id: 'atualizacoes',
    eyebrow: 'Atualizações',
    title: 'Linha do tempo da campanha e do tratamento',
    description:
      'Use esta área para manter quem ajudou informado sobre consultas, exames, arrecadação, cirurgia e pós-operatório.',
    items: [
      {
        date: '12 abr 2026',
        title: 'Primeiro atendimento após o acidente',
        description:
          'O Chico foi avaliado por causa da dificuldade para apoiar a perna e da dor ao se movimentar.',
        tag: 'Consulta'
      },
      {
        date: '12 abr 2026',
        title: 'Avaliação ortopédica e pedido de exames',
        description:
          'A clínica indicou investigação mais detalhada e reforçou a necessidade de tratamento cirúrgico.',
        tag: 'Exames'
      },
      {
        date: '13 abr 2026',
        title: 'Internação',
        description:
          'Chico foi internado, medicado e entrou em observação para realização de exames.',
        tag: 'Internação'
      },
      {
        date: '15 abr 2026',
        title: 'Criação da Campanha',
        description:
          'Campanha criada para realizar arrecadação de fundos.',
        tag: 'Arrecadação'
      },
      {
        date: 'Data a confirmar',
        title: 'Cirurgia e recuperação',
        description:
          'Assim que a cirurgia for marcada, esta seção será atualizada com data, evolução clínica e próximos cuidados.',
        tag: 'Próximos passos'
      }
    ] satisfies UpdateItem[]
  },
  share: {
    eyebrow: 'Compartilhe a campanha',
    title: 'Se não puder doar agora, compartilhar já ajuda muito',
    description:
      'Enviar esta página para amigos, família e grupos confiáveis aumenta o alcance da campanha e pode acelerar o tratamento do Chico.',
    whatsappButtonLabel: 'Compartilhar no WhatsApp',
    copyLinkButtonLabel: 'Copiar link da campanha',
    copiedLabel: 'Link copiado',
    message:
      'Oi! Estou compartilhando a campanha do Chico. Ele sofreu um acidente, rompeu três ligamentos da patela e precisa de ajuda para cirurgia, exames e recuperação. Qualquer apoio faz diferença.'
  },
  footer: {
    eyebrow: 'Contato e transparência',
    thankYouMessage:
      'Obrigado por dedicar um tempo para conhecer a história do Chico e considerar uma ajuda.',
    transparencyNote:
      'A proposta desta página é reunir informações, contatos e formas de contribuição com transparência e facilidade de atualização.',
    finalMessage:
      'Cada compartilhamento, cada doação e cada participação na rifa ajudam o Chico a ficar mais perto do tratamento que ele precisa.',
    whatsappLabel: 'WhatsApp',
    instagramLabel: 'Instagram',
    whatsappMessage: 'Oi! Vi a página do Chico e quero contribuir.'
  },
  contact: {
    tutorName: 'Matheus Mendes',
    whatsappNumber: '5511975432912',
    whatsappDisplay: '(11) 97543-2912',
    instagramHandle: '@ajudechicoogato',
    instagramUrl: 'https://www.instagram.com/ajudechicoogato',
    campaignUrl: 'https://ajudeochico.vercel.app'
  },
  images: galleryImages,
  evidenceDocuments
} as const;

export type CampaignData = typeof campaignData;
