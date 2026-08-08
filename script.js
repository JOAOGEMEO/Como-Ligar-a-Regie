// =====================================================
// PROCEDURES DATA
// =====================================================

const proceduresData = {
  pt: {
    "ligar-regie": {
      title: "Ligar a Régie",
      storageKey: "infoon_ligar_v16",
      steps: [
        {
          title: "Ligar os MDU da Sala de Máquinas",
          tasks: [
            "Ligar os MDU na sala de máquinas.",
            "Confirmar os LEDs de funcionamento.",
            "Verificar que os equipamentos arrancam sem erro."
          ],
          note: "Este passo prepara a infraestrutura técnica antes da operação na régie.",
          image: "assets/imagens/Arranque/0.jpg"
        },
        {
          title: "Ligar os MDU da Régie",
          tasks: [
            "Ligar os MDU localizados na régie.",
            "Confirmar comunicação com a sala de máquinas.",
            "Verificar sinais ou indicadores de estado."
          ],
          note: "Confirmar ligação antes de avançar para mesas e fontes.",
          image: "assets/imagens/Arranque/1.jpg"
        },
        {
          title: "Ligar Mesas, PC das VT's e Mesa de Som",
          tasks: [
            "Ligar a mesa da sala de máquinas.",
            "Ligar a mesa principal da régie.",
            "Ligar a mesa de som.",
            "Ligar o PC das VT's.",
            "Aguardar o arranque completo de todos os equipamentos.",
            "Confirmar que não existem mensagens de erro."
          ],
          note: "Não avançar se algum equipamento apresentar erro no arranque.",
          image: "assets/imagens/Arranque/2.jpg"
        },
        {
          title: "Ligar Monitores",
          tasks: [
            "Ligar os monitores da régie.",
            "Confirmar imagem nos ecrãs.",
            "Verificar se as fontes aparecem nos monitores corretos."
          ],
          note: "Os monitores devem permitir validar imagem antes de ligar câmaras."
        }
      ]
    },

    streaming: {
      title: "Streaming",
      storageKey: "infoon_streaming_v16",
      steps: [
        {
          title: "Verificar que a Régie está Operacional",
          tasks: [
            "Confirmar que o procedimento Ligar a Régie foi concluído.",
            "Confirmar sinal de vídeo das câmaras.",
            "Confirmar áudio operacional.",
            "Confirmar intercoms operacionais."
          ],
          note: "Não iniciar streaming sem validação de vídeo, áudio e comunicação."
        },
        {
          title: "Inserir a Stream Key",
          tasks: [
            "Introduzir a Stream Key fornecida para a transmissão.",
            "Confirmar que a Stream Key corresponde ao evento em curso.",
            "Exemplo de Stream Key: 3ec3-qhu3-bp5f-2dr1-11wj"
          ],
          warning: "Utilizar sempre a chave correta fornecida para a transmissão.",
          image: "assets/imagens/stream-key.jpg"
        },
        {
          title: "Iniciar a Transmissão",
          tasks: [
            "Confirmar novamente áudio e vídeo.",
            "Carregar no botão ON AIR.",
            "Confirmar que o estado muda para transmissão ativa."
          ],
          note: "Após carregar em ON AIR, aguardar cerca de 3 segundos."
        },
        {
          title: "Encerrar Streaming",
          tasks: [
            "Confirmar fim do evento.",
            "Parar a gravação do programa de TV.",
            "Carregar no botão ON AIR para terminar a transmissão.",
            "Validar num segundo dispositivo que a transmissão terminou."
          ],
          note: "Este procedimento não inclui desligar a régie."
        }
      ]
    },

    "desligar-regie": {
      title: "Desligar a Régie",
      storageKey: "infoon_desligar_v16",
      steps: [
        {
          title: "Confirmar Fim da Operação",
          tasks: [
            "Confirmar que a gravação terminou.",
            "Confirmar que o streaming terminou, quando aplicável.",
            "Informar a equipa que vai iniciar o encerramento."
          ],
          warning: "Nunca desligar equipamentos antes de confirmar o fim da gravação/transmissão."
        },
        {
          title: "Desligar Equipamentos",
          tasks: [
            "Desligar câmaras.",
            "Desligar CCU.",
            "Desligar flycase de áudio.",
            "Encerrar corretamente o PC das VT's.",
            "Desligar mesas e monitores."
          ],
          note: "O encerramento segue a ordem inversa ao arranque."
        },
        {
          title: "Verificação Final",
          tasks: [
            "Confirmar que todos os equipamentos estão desligados.",
            "Confirmar que os cabos estão organizados.",
            "Reportar qualquer anomalia encontrada."
          ],
          note: "Só concluir quando o espaço estiver pronto para a próxima equipa."
        }
      ]
    }
  }
};


// =====================================================
// ENGLISH VERSION
// =====================================================

proceduresData.en = JSON.parse(JSON.stringify(proceduresData.pt));

proceduresData.en["ligar-regie"].title = "Power On Control Room";
proceduresData.en["ligar-regie"].steps = [
  {
    title: "Turn on the Machine Room MDUs",
    tasks: [
      "Turn on the MDUs in the machine room.",
      "Confirm the status LEDs are operational.",
      "Verify that the equipment starts without errors."
    ],
    note: "This step prepares the technical infrastructure before operating the control room.",
    image: "assets/imagens/Arranque/0.jpg"
  },
  {
    title: "Turn on the Control Room MDUs",
    tasks: [
      "Turn on the MDUs located in the control room.",
      "Confirm communication with the machine room.",
      "Verify signals or status indicators."
    ],
    note: "Confirm the connection before moving on to consoles and sources.",
    image: "assets/imagens/Arranque/1.jpg"
  },
  {
    title: "Turn on Consoles, VT PC and Audio Desk",
    tasks: [
      "Turn on the machine room console.",
      "Turn on the main control room console.",
      "Turn on the audio desk.",
      "Turn on the VT PC.",
      "Wait for all equipment to fully power up.",
      "Confirm there are no startup error messages."
    ],
    note: "Do not proceed if any equipment reports an error during startup.",
    image: "assets/imagens/Arranque/2.jpg"
  },
  {
    title: "Turn on Monitors",
    tasks: [
      "Turn on the control room monitors.",
      "Confirm image on the screens.",
      "Verify that sources appear on the correct monitors."
    ],
    note: "Monitors must allow image validation before turning on cameras."
  }
];

proceduresData.en["streaming"].steps = [
  {
    title: "Verify the Control Room is Operational",
    tasks: [
      "Confirm that the Power On Control Room procedure is complete.",
      "Confirm video signal from the cameras.",
      "Confirm audio is operational.",
      "Confirm intercoms are operational."
    ],
    note: "Do not begin streaming without validating video, audio, and communication."
  },
  {
    title: "Enter the Stream Key",
    tasks: [
      "Enter the provided Stream Key for the broadcast.",
      "Confirm the Stream Key matches the current event.",
      "Example Stream Key: 3ec3-qhu3-bp5f-2dr1-11wj"
    ],
    warning: "Always use the correct stream key provided for the broadcast.",
    image: "assets/imagens/stream-key.jpg"
  },
  {
    title: "Start the Broadcast",
    tasks: [
      "Confirm audio and video again.",
      "Press the ON AIR button.",
      "Confirm the state changes to active transmission."
    ],
    note: "After pressing ON AIR, wait about 3 seconds."
  },
  {
    title: "End the Streaming",
    tasks: [
      "Confirm the event has ended.",
      "Stop the TV program recording.",
      "Press the ON AIR button to end the transmission.",
      "Validate on a second device that the transmission has finished."
    ],
    note: "This procedure does not include shutting down the control room."
  }
];

proceduresData.en["desligar-regie"].title = "Power Off Control Room";
proceduresData.en["desligar-regie"].steps = [
  {
    title: "Confirm End of Operation",
    tasks: [
      "Confirm recording has ended.",
      "Confirm streaming has ended, when applicable.",
      "Inform the team that shutdown will begin."
    ],
    warning: "Never power off equipment before confirming the end of recording/transmission."
  },
  {
    title: "Power Off Equipment",
    tasks: [
      "Power off cameras.",
      "Power off the CCU.",
      "Power off the audio flycase.",
      "Shut down the VT PC properly.",
      "Power off consoles and monitors."
    ],
    note: "Shutdown follows the reverse order of startup."
  },
  {
    title: "Final Verification",
    tasks: [
      "Confirm all equipment is powered off.",
      "Confirm cables are organized.",
      "Report any faults found."
    ],
    note: "Only finish when the area is ready for the next team."
  }
];


// =====================================================
// UI TRANSLATIONS
// =====================================================

const ui = {
  pt: {
    subtitle: "Plataforma de Procedimentos Técnicos do DCAM.",
    wipTitle: "Documento em work in progress",
    wipText: "Esta plataforma está em desenvolvimento e será atualizada com novos procedimentos, imagens e validações técnicas.",

    areaStudios: "Regras dos Estúdios",
    areaStudiosDesc: "Segurança · Reservas · Limpeza · Equipamentos",
    areaRegie: "Régie",
    areaRegieDesc: "Arranque · Streaming · Encerramento",
    areaRegieTitle: "Régie",
    areaVP: "VP - Produção Virtual",
    areaVPDesc: "Produção virtual e estúdios virtuais",
    areaVPTitle: "VP - Produção Virtual",
    areaVideoteca: "Videoteca",
    areaVideotecaDesc: "Acesso a vídeos e referências técnicas",
    areaVideotecaTitle: "Videoteca",
    areaReshape: "Reshape",
    areaReshapeDesc: "Área preparada para novos procedimentos",
    areaStudiosTitle: "Regras - Estúdios",

    generalProcedures: "Procedimentos Gerais",
    regieProcedures: "Procedimentos da Régie",

    backHome: "← Voltar",
    backButton: "← Voltar",

    security: "Segurança",
    bookings: "Reservas",
    cleaning: "Limpeza",
    equipment: "Equipamentos",

    securityDesc: "Regras essenciais de segurança, circulação, cabos e utilização responsável dos espaços.",
    bookingsDesc: "Marcação, confirmação, utilização e cancelamento de espaços e equipamentos.",
    cleaningDesc: "Organização, limpeza, arrumação e entrega dos estúdios após utilização.",
    equipmentDesc: "Requisição, transporte, utilização, devolução e reporte de anomalias.",

    startup: "Arranque",
    shutdown: "Encerramento",
    support: "Suporte",
    liveBadge: "Live",
    streamingTitle: "Streaming",

    powerOnRegie: "Ligar a Régie",
    powerOnRegieDesc: "Sequência de arranque dos MDU, mesas, câmaras, CCU, áudio e intercoms.",
    streamingDesc: "Procedimento para iniciar e encerrar transmissão no PC das VT's.",
    powerOffRegie: "Desligar a Régie",
    powerOffRegieDesc: "Procedimento final em ordem inversa ao arranque.",

    commonProblems: "Problemas Comuns",
    commonProblemsDesc: "Diagnóstico de imagem, áudio, sinal, intercoms e fontes.",

    activeProcedure: "Procedimento ativo",
    progressSaved: "O progresso fica guardado neste dispositivo.",
    finalValidation: "Validação final",
    finalValidationText: "Quando todos os passos estiverem concluídos, o procedimento fica validado.",
    markAllDone: "Marcar tudo como concluído",

    contribute: "Contribuir",
    suggestionsTitle: "Sugestões e correções",
    suggestionsText: "Este documento encontra-se em desenvolvimento contínuo. Para sugerir melhorias ou reportar erros, contacte:",

    vpWipTitle: "Brevemente — Área em desenvolvimento",
    vpWipText: "Esta área receberá procedimentos e orientações para produção virtual.",
    videotecaWipTitle: "Brevemente — Área em desenvolvimento",
    videotecaWipText: "Esta área receberá procedimentos e orientações para a Videoteca.",
    reshapeWipTitle: "Brevemente — Área em desenvolvimento",
    reshapeWipText: "Esta área receberá procedimentos e orientações para o Reshape.",

    stepDone: "Passo concluído",
    mediaTitle: "Imagem / vídeo",
    mediaPlaceholder: "Adicionar conteúdo depois",
    progress: "concluído",
    steps: "passos",
    exampleKey: "Exemplo de Stream Key",

    reshapeInDevelopment: "Área em desenvolvimento",
    reshapeText: "Esta área está preparada para receber procedimentos próprios de Reshape."
  },

  en: {
    subtitle: "Technical Procedures Platform for DCAM.",
    wipTitle: "Work in progress document",
    wipText: "This platform is under development and will be updated with new procedures, images and technical validations.",

    areaStudios: "Studio Rules",
    areaStudiosDesc: "Safety · Bookings · Cleaning · Equipment",
    areaRegie: "Control Room",
    areaRegieDesc: "Startup · Streaming · Shutdown",
    areaRegieTitle: "Control Room",
    areaVP: "VP - Virtual Production",
    areaVPDesc: "Virtual production and virtual studios",
    areaVPTitle: "VP - Virtual Production",
    areaVideoteca: "Film Library",
    areaVideotecaDesc: "Access to videos and technical references",
    areaVideotecaTitle: "Film Library",
    areaReshape: "Reshape",
    areaReshapeDesc: "Area prepared for new procedures",
    areaStudiosTitle: "Studio Rules",

    generalProcedures: "General Procedures",
    regieProcedures: "Control Room Procedures",

    backHome: "← Back",
    backButton: "← Back",

    security: "Safety",
    bookings: "Bookings",
    cleaning: "Cleaning",
    equipment: "Equipment",

    securityDesc: "Essential rules for safety, circulation, cables and responsible use of spaces.",
    bookingsDesc: "Booking, confirmation, use and cancellation of spaces and equipment.",
    cleaningDesc: "Organisation, cleaning, tidying and handover of studios after use.",
    equipmentDesc: "Request, transport, use, return and anomaly reporting.",

    startup: "Startup",
    shutdown: "Shutdown",
    support: "Support",
    liveBadge: "Live",
    streamingTitle: "Streaming",

    powerOnRegie: "Power On Control Room",
    powerOnRegieDesc: "Startup sequence for MDUs, consoles, cameras, CCUs, audio and intercoms.",
    streamingDesc: "Procedure to start and end broadcast from the VT PC.",
    powerOffRegie: "Power Off Control Room",
    powerOffRegieDesc: "Final procedure in reverse startup order.",

    commonProblems: "Common Issues",
    commonProblemsDesc: "Image, audio, signal, intercom and source diagnosis.",

    activeProcedure: "Active procedure",
    progressSaved: "Progress is saved on this device.",
    finalValidation: "Final validation",
    finalValidationText: "When all steps are complete, the procedure is validated.",
    markAllDone: "Mark all as complete",

    contribute: "Contribute",
    suggestionsTitle: "Suggestions and corrections",
    suggestionsText: "This document is under continuous development. To suggest improvements or report errors, contact:",

    vpWipTitle: "Coming soon — Area in development",
    vpWipText: "This area will receive procedures and guidance for virtual production.",
    videotecaWipTitle: "Coming soon — Area in development",
    videotecaWipText: "This area will receive procedures and guidance for the Film Library.",
    reshapeWipTitle: "Coming soon — Area in development",
    reshapeWipText: "This area is prepared to receive Reshape-specific procedures.",

    stepDone: "Step completed",
    mediaTitle: "Image / video",
    mediaPlaceholder: "Add content later",
    progress: "complete",
    steps: "steps",
    exampleKey: "Example Stream Key",

    reshapeInDevelopment: "Area in development",
    reshapeText: "This area is prepared to receive Reshape-specific procedures."
  }
};


// =====================================================
// STUDIO RULES
// =====================================================

const studioRules = {
  pt: {
    seguranca: [
      "<strong>1. Segurança Pessoal</strong>\n<ul>\n  <li>Utilizar vestuário e calçado adequados.</li>\n  <li>Não correr dentro dos estúdios.</li>\n  <li>Não permanecer debaixo de cargas suspensas.</li>\n  <li>Manter atenção durante montagens e desmontagens.</li>\n  <li>Comunicar imediatamente qualquer acidente.</li>\n</ul>",
      "<strong>2. Circulação</strong>\n<ul>\n  <li>Manter corredores livres.</li>\n  <li>Não bloquear portas corta-fogo nem saídas de emergência.</li>\n  <li>Não deixar material nas zonas de circulação.</li>\n  <li>Identificar zonas de trabalho antes de iniciar uma montagem.</li>\n</ul>",
      "<strong>3. Cabos</strong>\n<ul>\n  <li>Nunca deixar cabos atravessados sem proteção.</li>\n  <li>Utilizar rampas ou fita apropriada.</li>\n  <li>Evitar tensão nos conectores.</li>\n  <li>Enrolar corretamente os cabos após utilização.</li>\n</ul>",
      "<strong>4. Eletricidade</strong>\n<ul>\n  <li>Não sobrecarregar tomadas.</li>\n  <li>Não utilizar equipamentos com cabos danificados.</li>\n  <li>Desligar equipamentos antes de alterar ligações.</li>\n  <li>Reportar imediatamente qualquer cheiro a queimado ou faíscas.</li>\n</ul>",
      "<strong>5. Equipamentos</strong>\n<ul>\n  <li>Utilizar apenas equipamentos autorizados.</li>\n  <li>Nunca forçar conectores.</li>\n  <li>Transportar equipamentos pesados por duas pessoas quando necessário.</li>\n  <li>Confirmar o estado antes e depois da utilização.</li>\n</ul>",
      "<strong>6. Iluminação</strong>\n<ul>\n  <li>Os projetores podem atingir temperaturas elevadas.</li>\n  <li>Nunca tocar num projetor acabado de desligar.</li>\n  <li>Aguardar o arrefecimento antes de arrumar.</li>\n  <li>Verificar a fixação dos projetores antes de ligar.</li>\n</ul>",
      "<strong>7. Trabalhos em Altura</strong>\n<ul>\n  <li>Utilizar apenas escadas aprovadas.</li>\n  <li>Nunca subir a cadeiras.</li>\n  <li>Garantir sempre três pontos de apoio.</li>\n  <li>Ter uma segunda pessoa a segurar a escada.</li>\n</ul>",
      "<strong>8. Incêndio e Emergência</strong>\n<ul>\n  <li>Conhecer a localização dos extintores.</li>\n  <li>Conhecer os caminhos de evacuação.</li>\n  <li>Em caso de emergência seguir as indicações dos responsáveis.</li>\n  <li>Nunca bloquear equipamentos de emergência.</li>\n</ul>",
      "<strong>9. No Final da Utilização</strong>\n<ul>\n  <li>Desligar equipamentos.</li>\n  <li>Recolher cabos.</li>\n  <li>Arrumar tripés e acessórios.</li>\n  <li>Confirmar que o estúdio fica limpo.</li>\n  <li>Reportar qualquer dano.</li>\n</ul>"
    ],
    reservas: [
      "<strong>Como efetuar uma reserva</strong>\n<p>As reservas dos estúdios podem ser efetuadas através da plataforma <strong>Reshape</strong> ou por <strong>e-mail</strong> para o Departamento de Cinema e Artes dos Media.</p>\n<p>Sempre que possível, deverá ser utilizada a plataforma <strong>Reshape</strong>, por permitir uma gestão mais eficiente da ocupação dos espaços.</p>",
      "<strong>Informação necessária</strong>\n<p>Ao efetuar uma reserva, deverão ser indicados os seguintes elementos:</p>\n<ul>\n  <li>Nome do responsável pela reserva;</li>\n  <li>Unidade curricular, projeto ou atividade;</li>\n  <li>Estúdio pretendido;</li>\n  <li>Data da utilização;</li>\n  <li>Hora de início e hora de fim;</li>\n  <li>Equipamentos adicionais, quando necessários.</li>\n</ul>",
      "<strong>Confirmação da reserva</strong>\n<p>A reserva apenas é considerada válida após confirmação pelo Departamento de Cinema e Artes dos Media.</p>\n<p>Antes da utilização do espaço, deverá ser verificado que a reserva foi confirmada e que o horário e o estúdio atribuídos correspondem ao solicitado.</p>",
      "<strong>Alterações e cancelamentos</strong>\n<p>Sempre que uma reserva deixe de ser necessária ou sofra alterações, o utilizador deverá proceder ao seu cancelamento no <strong>Reshape</strong> ou comunicar essa alteração por <strong>e-mail</strong>, com a maior antecedência possível.</p>\n<p>O cancelamento atempado permite disponibilizar o estúdio para outros utilizadores.</p>",
      "<strong>Utilização do estúdio</strong>\n<p>O período reservado deverá contemplar todas as fases da atividade, incluindo:</p>\n<ul>\n  <li>Montagem;</li>\n  <li>Ensaios;</li>\n  <li>Produção ou gravação;</li>\n  <li>Desmontagem;</li>\n  <li>Limpeza e organização final.</li>\n</ul>\n<p>Não é permitida a permanência no estúdio para além do horário reservado sem autorização prévia.</p>",
      "<strong>Responsabilidade</strong>\n<p>O responsável pela reserva é também responsável pela correta utilização do estúdio durante todo o período de ocupação, garantindo o cumprimento das normas de segurança, a boa utilização dos equipamentos e a entrega do espaço em condições adequadas para a utilização seguinte.</p>",
      "<strong>Entrega do espaço</strong>\n<p>No final da utilização deverá ser confirmado que:</p>\n<ul>\n  <li>Todos os equipamentos utilizados foram desligados;</li>\n  <li>O material foi devidamente arrumado;</li>\n  <li>O espaço ficou limpo e organizado;</li>\n  <li>Qualquer dano ou anomalia foi comunicado ao Departamento de Cinema e Artes dos Media.</li>\n</ul>"
    ],
    limpeza: [
      "<strong>Responsabilidade</strong>\n<p>Todos os utilizadores são responsáveis por manter os estúdios, régies e restantes espaços limpos, organizados e em condições adequadas para a utilização seguinte.</p>\n<p>A limpeza e organização do espaço fazem parte integrante da utilização do estúdio e constituem uma responsabilidade de todos os utilizadores.</p>",
      "<strong>Durante a utilização</strong>\n<p>Durante a atividade deverá ser mantido um ambiente de trabalho organizado, evitando a acumulação de materiais, cabos, caixas ou equipamentos nas zonas de circulação.</p>\n<p>Sempre que possível, o material que deixe de ser utilizado deverá ser imediatamente arrumado, de forma a garantir a segurança e a eficiência do trabalho.</p>\n<p>Não deverão ser deixados resíduos, embalagens, garrafas ou objetos pessoais espalhados pelo estúdio.</p>",
      "<strong>No final da utilização</strong>\n<p>Antes de abandonar o estúdio é obrigatório:</p>\n<ul>\n  <li>Desligar todos os equipamentos utilizados;</li>\n  <li>Arrumar câmaras, tripés, iluminação e restantes acessórios nos respetivos locais;</li>\n  <li>Recolher e enrolar corretamente todos os cabos;</li>\n  <li>Arrumar mesas, cadeiras e restante mobiliário utilizado;</li>\n  <li>Remover todo o lixo e resíduos produzidos durante a atividade;</li>\n  <li>Verificar que não ficam objetos pessoais no espaço.</li>\n</ul>\n<p>O estúdio deverá ser entregue nas mesmas condições em que foi encontrado.</p>",
      "<strong>Equipamentos</strong>\n<p>Todo o equipamento deverá ser devolvido limpo, organizado e no mesmo estado em que foi recebido.</p>\n<p>Caso seja detetada qualquer avaria, dano ou funcionamento anómalo, esta situação deverá ser comunicada imediatamente ao Departamento de Cinema e Artes dos Media.</p>\n<p>Os utilizadores não deverão efetuar reparações ou intervenções técnicas por iniciativa própria.</p>",
      "<strong>Cenografia e Materiais</strong>\n<p>Toda a cenografia, adereços, materiais de produção ou outros equipamentos temporários deverão ser removidos após o término da atividade, salvo autorização expressa do Departamento.</p>\n<p>Não deverão permanecer materiais nos estúdios, corredores ou zonas comuns sem autorização.</p>",
      "<strong>Gestão de Resíduos</strong>\n<p>Todos os resíduos deverão ser colocados nos recipientes apropriados.</p>\n<p>Sempre que existam materiais volumosos ou resíduos que não possam ser removidos pelos utilizadores, deverá ser solicitada a intervenção do Departamento.</p>",
      "<strong>Limpeza Adicional</strong>\n<p>Sempre que o estúdio necessite de uma limpeza que ultrapasse a manutenção normal efetuada pelos utilizadores, deverá ser contactada a <strong>equipa de limpeza</strong> ou o <strong>responsável do estúdio</strong>.</p>\n<p>Deverão ser comunicadas, entre outras, as seguintes situações:</p>\n<ul>\n  <li>Derrame de líquidos ou outras substâncias;</li>\n  <li>Sujidade que exija limpeza especializada;</li>\n  <li>Resíduos de grandes dimensões;</li>\n  <li>Danos nas instalações ou equipamentos;</li>\n  <li>Situações que possam comprometer a segurança ou a utilização do espaço.</li>\n</ul>\n<p>Nenhuma situação de limpeza pendente deverá ser deixada sem o devido conhecimento do responsável.</p>",
      "<strong>Verificação Final</strong>\n<p>Antes de abandonar o espaço deverá ser confirmado que:</p>\n<ul>\n  <li>O estúdio ficou limpo e organizado;</li>\n  <li>Todos os equipamentos foram desligados;</li>\n  <li>Todo o material foi devidamente arrumado;</li>\n  <li>Os cabos ficaram corretamente acondicionados;</li>\n  <li>Não ficaram objetos pessoais ou materiais da produção;</li>\n  <li>O lixo foi removido;</li>\n  <li>Qualquer anomalia foi comunicada ao Departamento de Cinema e Artes dos Media.</li>\n</ul>\n<p>O estúdio deverá ficar preparado para ser utilizado, de imediato, pela equipa seguinte.</p>"
    ],
    equipamentos: [
      "<strong>Responsabilidade</strong>\n<p>Os equipamentos do Departamento de Cinema e Artes dos Media constituem recursos comuns de apoio às atividades académicas, sendo da responsabilidade de todos os utilizadores a sua correta utilização, conservação e preservação.</p>\n<p>Cada utilizador é responsável pelos equipamentos que lhe forem entregues durante o período de utilização, devendo assegurar que estes são utilizados de forma adequada e devolvidos nas mesmas condições em que foram recebidos.</p>",
      "<strong>Requisição de Equipamentos</strong>\n<p>Os equipamentos deverão ser requisitados de acordo com os procedimentos definidos pelo Departamento.</p>\n<p>A requisição deverá ser efetuada com a antecedência necessária, indicando os equipamentos pretendidos e o período de utilização.</p>\n<p>A entrega dos equipamentos está sempre sujeita à disponibilidade existente.</p>",
      "<strong>Levantamento</strong>\n<p>No momento da entrega dos equipamentos, o utilizador deverá confirmar:</p>\n<ul>\n  <li>O estado geral do equipamento;</li>\n  <li>A existência de todos os acessórios;</li>\n  <li>O correcto funcionamento do material, sempre que aplicável.</li>\n</ul>\n<p>Qualquer dano, avaria ou ausência de componentes deverá ser comunicado antes da utilização.</p>",
      "<strong>Utilização</strong>\n<p>Os equipamentos deverão ser utilizados exclusivamente para fins académicos, institucionais ou projetos previamente autorizados.</p>\n<p>Durante a utilização é obrigatório:</p>\n<ul>\n  <li>Respeitar as instruções de funcionamento;</li>\n  <li>Utilizar corretamente todos os equipamentos;</li>\n  <li>Evitar impactos, quedas ou utilização inadequada;</li>\n  <li>Não alterar configurações técnicas sem autorização;</li>\n  <li>Não desmontar ou reparar qualquer equipamento.</li>\n</ul>",
      "<strong>Transporte</strong>\n<p>Sempre que os equipamentos necessitem de ser transportados, deverão ser utilizados os respetivos estojos, malas ou sistemas de proteção.</p>\n<p>O transporte deverá ser efetuado com os devidos cuidados, evitando choques, quedas ou exposição a condições que possam provocar danos.</p>\n<p>Equipamentos de maior dimensão ou peso deverão ser transportados por duas pessoas, sempre que necessário.</p>",
      "<strong>Conservação</strong>\n<p>Durante a utilização deverão ser adotadas boas práticas de conservação dos equipamentos.</p>\n<p>Os utilizadores deverão evitar:</p>\n<ul>\n  <li>Exposição à chuva, humidade ou poeiras;</li>\n  <li>Contacto com líquidos ou substâncias corrosivas;</li>\n  <li>Exposição a temperaturas extremas;</li>\n  <li>Utilização inadequada ou negligente.</li>\n</ul>",
      "<strong>Devolução</strong>\n<p>No final da utilização, todos os equipamentos deverão ser devolvidos completos, limpos e organizados.</p>\n<p>Antes da devolução deverá ser confirmado que:</p>\n<ul>\n  <li>Todos os equipamentos foram desligados corretamente;</li>\n  <li>Todos os acessórios estão presentes;</li>\n  <li>Os cabos foram corretamente enrolados;</li>\n  <li>As baterias foram colocadas a carregar, quando aplicável;</li>\n  <li>O material foi acondicionado nos respetivos estojos ou locais de armazenamento.</li>\n</ul>",
      "<strong>Danos e Avarias</strong>\n<p>Qualquer dano, avaria, perda ou funcionamento anómalo deverá ser comunicado imediatamente ao Departamento de Cinema e Artes dos Media.</p>\n<p>Os utilizadores não deverão tentar reparar equipamentos por iniciativa própria.</p>\n<p>Sempre que possível, deverá ser fornecida uma descrição da ocorrência para facilitar a avaliação técnica.</p>",
      "<strong>Equipamentos Externos</strong>\n<p>A saída de equipamentos das instalações da Universidade apenas poderá ser efetuada mediante autorização do Departamento e de acordo com os procedimentos de requisição em vigor.</p>\n<p>O utilizador responsável pela requisição é igualmente responsável pela correta utilização, transporte e devolução dos equipamentos.</p>",
      "<strong>Verificação Final</strong>\n<p>Antes de concluir a utilização dos equipamentos deverá ser confirmado que:</p>\n<ul>\n  <li>Todo o material requisitado foi devolvido;</li>\n  <li>Todos os acessórios estão completos;</li>\n  <li>Os equipamentos encontram-se limpos e em boas condições de utilização;</li>\n  <li>As baterias foram colocadas a carregar, quando aplicável;</li>\n  <li>Os cabos foram corretamente organizados;</li>\n  <li>Qualquer dano ou anomalia foi comunicado ao Departamento de Cinema e Artes dos Media.</li>\n</ul>\n<p>Todos os equipamentos deverão ficar preparados para utilização imediata pelo utilizador seguinte.</p>"
    ]
  },

  en: {
    seguranca: [
      "<strong>1. Personal Safety</strong>\n<ul>\n  <li>Use appropriate clothing and footwear.</li>\n  <li>Do not run inside the studios.</li>\n  <li>Do not remain under suspended loads.</li>\n  <li>Remain attentive during set-up and dismantling.</li>\n  <li>Report any accident immediately.</li>\n</ul>",
      "<strong>2. Circulation</strong>\n<ul>\n  <li>Keep corridors clear.</li>\n  <li>Do not block fire doors or emergency exits.</li>\n  <li>Do not leave materials in circulation areas.</li>\n  <li>Identify work zones before starting a rigging or setup.</li>\n</ul>",
      "<strong>3. Cables</strong>\n<ul>\n  <li>Never leave cables crossing walkways without protection.</li>\n  <li>Use ramps or appropriate tape.</li>\n  <li>Avoid putting tension on connectors.</li>\n  <li>Coil cables correctly after use.</li>\n</ul>",
      "<strong>4. Electricity</strong>\n<ul>\n  <li>Do not overload sockets.</li>\n  <li>Do not use equipment with damaged cables.</li>\n  <li>Turn off equipment before changing connections.</li>\n  <li>Report any smell of burning or sparks immediately.</li>\n</ul>",
      "<strong>5. Equipment</strong>\n<ul>\n  <li>Use only authorised equipment.</li>\n  <li>Never force connectors.</li>\n  <li>Carry heavy equipment with two people when needed.</li>\n  <li>Check condition before and after use.</li>\n</ul>",
      "<strong>6. Lighting</strong>\n<ul>\n  <li>Projectors can reach high temperatures.</li>\n  <li>Never touch a projector immediately after switching it off.</li>\n  <li>Allow cooling time before storing.</li>\n  <li>Check projector mounts before powering on.</li>\n</ul>",
      "<strong>7. Working at Height</strong>\n<ul>\n  <li>Use only approved ladders.</li>\n  <li>Never stand on chairs.</li>\n  <li>Always ensure three points of contact.</li>\n  <li>Have a second person hold the ladder.</li>\n</ul>",
      "<strong>8. Fire and Emergency</strong>\n<ul>\n  <li>Know the location of fire extinguishers.</li>\n  <li>Know evacuation routes.</li>\n  <li>In an emergency follow the instructions of the responsible staff.</li>\n  <li>Never obstruct emergency equipment.</li>\n</ul>",
      "<strong>9. End of Use</strong>\n<ul>\n  <li>Turn off equipment.</li>\n  <li>Collect cables.</li>\n  <li>Store tripods and accessories.</li>\n  <li>Ensure the studio is left clean.</li>\n  <li>Report any damage.</li>\n</ul>"
    ],
    reservas: [
      "<strong>How to make a reservation</strong>\n<p>Studio reservations can be made through the <strong>Reshape</strong> platform or by <strong>email</strong> to the Department of Cinema and Media Arts.</p>\n<p>Whenever possible, the <strong>Reshape</strong> platform should be used, as it enables more efficient management of space occupancy.</p>",
      "<strong>Required information</strong>\n<p>When making a reservation, the following details should be provided:</p>\n<ul>\n  <li>Name of the person responsible for the booking;</li>\n  <li>Course unit, project or activity;</li>\n  <li>Requested studio;</li>\n  <li>Date of use;</li>\n  <li>Start and end time;</li>\n  <li>Any additional equipment required.</li>\n</ul>",
      "<strong>Reservation confirmation</strong>\n<p>A reservation is only considered valid after confirmation by the Department of Cinema and Media Arts.</p>\n<p>Prior to using the space, verify that the reservation has been confirmed and that the assigned time and studio match the request.</p>",
      "<strong>Changes and cancellations</strong>\n<p>If a reservation is no longer needed or requires changes, the user should cancel it on <strong>Reshape</strong> or notify the Department by <strong>email</strong> as early as possible.</p>\n<p>Timely cancellations make the studio available for other users.</p>",
      "<strong>Use of the studio</strong>\n<p>The reserved period should cover all phases of the activity, including:</p>\n<ul>\n  <li>Setup;</li>\n  <li>Rehearsals;</li>\n  <li>Production or recording;</li>\n  <li>Teardown;</li>\n  <li>Cleaning and final organisation.</li>\n</ul>\n<p>Staying in the studio beyond the reserved time is not permitted without prior authorisation.</p>",
      "<strong>Responsibility</strong>\n<p>The person responsible for the reservation is also accountable for the correct use of the studio during the entire occupancy period, ensuring compliance with safety rules, proper equipment use and leaving the space in suitable condition for the next user.</p>",
      "<strong>Handover</strong>\n<p>At the end of the reservation, confirm that:</p>\n<ul>\n  <li>All used equipment has been switched off;</li>\n  <li>Materials have been properly stored;</li>\n  <li>The space is clean and organised;</li>\n  <li>Any damage or anomaly has been reported to the Department of Cinema and Media Arts.</li>\n</ul>"
    ],
    limpeza: [
      "<strong>Responsibility</strong>\n<p>All users are responsible for keeping studios, control rooms and other spaces clean, organised and ready for the next use.</p>\n<p>Cleaning and organisation are an integral part of studio use and are the responsibility of all users.</p>",
      "<strong>During use</strong>\n<p>During activities, workspace should be kept organised, avoiding accumulation of materials, cables, boxes or equipment in circulation areas.</p>\n<p>When possible, materials no longer in use should be stored immediately to ensure safety and efficient work.</p>\n<p>No waste, packaging, bottles or personal items should be left scattered around the studio.</p>",
      "<strong>End of use</strong>\n<p>Before leaving the studio it is mandatory to:</p>\n<ul>\n  <li>Switch off all equipment used;</li>\n  <li>Store cameras, tripods, lighting and other accessories in their proper places;</li>\n  <li>Collect and properly coil all cables;</li>\n  <li>Put away tables, chairs and other used furniture;</li>\n  <li>Remove all rubbish and waste generated during the activity;</li>\n  <li>Check that no personal items remain in the space.</li>\n</ul>\n<p>The studio must be returned in the same condition in which it was found.</p>",
      "<strong>Equipment</strong>\n<p>All equipment should be returned clean, organised and in the same condition as received.</p>\n<p>If any fault, damage or abnormal operation is detected, it must be reported immediately to the Department of Cinema and Media Arts.</p>\n<p>Users should not attempt repairs or technical interventions on their own.</p>",
      "<strong>Scenography and Materials</strong>\n<p>All scenography, props, production materials or other temporary equipment must be removed after the activity, unless express permission is given by the Department.</p>\n<p>No materials should remain in studios, corridors or common areas without authorisation.</p>",
      "<strong>Waste Management</strong>\n<p>All waste must be placed in the appropriate containers.</p>\n<p>If there are bulky items or waste that cannot be removed by users, the Department should be contacted for assistance.</p>",
      "<strong>Additional Cleaning</strong>\n<p>If the studio requires a level of cleaning beyond normal user maintenance, contact the <strong>cleaning team</strong> or the <strong>studio manager</strong>.</p>\n<p>Report situations such as:</p>\n<ul>\n  <li>Spillage of liquids or other substances;</li>\n  <li>Contamination requiring specialised cleaning;</li>\n  <li>Large-volume waste;</li>\n  <li>Damage to facilities or equipment;</li>\n  <li>Situations that may compromise safety or use of the space.</li>\n</ul>\n<p>No pending cleaning situation should be left without informing the responsible person.</p>",
      "<strong>Final check</strong>\n<p>Before leaving the space confirm that:</p>\n<ul>\n  <li>The studio is clean and organised;</li>\n  <li>All equipment has been switched off;</li>\n  <li>All materials have been correctly stored;</li>\n  <li>Cables are properly secured;</li>\n  <li>No personal items or production materials remain;</li>\n  <li>Rubbish has been removed;</li>\n  <li>Any anomalies have been reported to the Department of Cinema and Media Arts.</li>\n</ul>\n<p>The studio should be ready for immediate use by the next team.</p>"
    ],
    equipamentos: [
      "<strong>Responsibility</strong>\n<p>The equipment of the Department of Cinema and Media Arts are shared resources supporting academic activities, and all users are responsible for their correct use, care and preservation.</p>\n<p>Each user is responsible for the equipment assigned to them during the period of use and must ensure it is used appropriately and returned in the same condition it was received.</p>",
      "<strong>Equipment Request</strong>\n<p>Equipment must be requested following the procedures defined by the Department.</p>\n<p>Requests should be made with sufficient notice, indicating the equipment required and the intended period of use.</p>\n<p>Equipment handover is always subject to availability.</p>",
      "<strong>Collection</strong>\n<p>At the time of handover, the user should check:</p>\n<ul>\n  <li>The general condition of the equipment;</li>\n  <li>That all accessories are present;</li>\n  <li>The correct functioning of the equipment, where applicable.</li>\n</ul>\n<p>Any damage, fault or missing components should be reported before use.</p>",
      "<strong>Use</strong>\n<p>Equipment should be used exclusively for academic, institutional purposes or pre-authorised projects.</p>\n<p>During use it is mandatory to:</p>\n<ul>\n  <li>Follow operating instructions;</li>\n  <li>Use equipment correctly;</li>\n  <li>Avoid impacts, drops or improper use;</li>\n  <li>Not change technical settings without authorisation;</li>\n  <li>Not disassemble or attempt repairs.</li>\n</ul>",
      "<strong>Transport</strong>\n<p>When equipment needs to be transported, use the appropriate cases, bags or protective systems.</p>\n<p>Transport must be carried out with care to avoid shocks, drops or exposure to damaging conditions.</p>\n<p>Larger or heavier equipment should be transported by two people when necessary.</p>",
      "<strong>Care</strong>\n<p>Adopt good conservation practices while using equipment.</p>\n<p>Users should avoid:</p>\n<ul>\n  <li>Exposure to rain, humidity or dust;</li>\n  <li>Contact with liquids or corrosive substances;</li>\n  <li>Exposure to extreme temperatures;</li>\n  <li>Inappropriate or negligent use.</li>\n</ul>",
      "<strong>Return</strong>\n<p>At the end of use, all equipment should be returned complete, clean and organised.</p>\n<p>Before returning, confirm that:</p>\n<ul>\n  <li>All equipment has been switched off correctly;</li>\n  <li>All accessories are present;</li>\n  <li>Cables have been properly coiled;</li>\n  <li>Batteries have been placed on charge, where applicable;</li>\n  <li>Equipment has been stored in their cases or designated storage locations.</li>\n</ul>",
      "<strong>Damage and Faults</strong>\n<p>Any damage, fault, loss or abnormal operation must be reported immediately to the Department of Cinema and Media Arts.</p>\n<p>Users must not attempt repairs on their own.</p>\n<p>Provide a description of the occurrence when possible to assist technical assessment.</p>",
      "<strong>External Equipment</strong>\n<p>Removing equipment from University premises is only permitted with Department authorisation and following the requisition procedures in force.</p>\n<p>The user responsible for the request is also responsible for the correct use, transport and return of the equipment.</p>",
      "<strong>Final Check</strong>\n<p>Before concluding equipment use confirm that:</p>\n<ul>\n  <li>All requested material has been returned;</li>\n  <li>All accessories are complete;</li>\n  <li>Equipment is clean and in good working condition;</li>\n  <li>Batteries have been charged where applicable;</li>\n  <li>Cables have been organised correctly;</li>\n  <li>Any damage or anomaly has been reported to the Department of Cinema and Media Arts.</li>\n</ul>\n<p>All equipment should be ready for immediate use by the next user.</p>"
    ]
  }
};

const ruleNames = {
  pt: {
    seguranca: "Segurança",
    reservas: "Reservas",
    limpeza: "Limpeza",
    equipamentos: "Equipamentos"
  },
  en: {
    seguranca: "Safety",
    reservas: "Bookings",
    limpeza: "Cleaning",
    equipamentos: "Equipment"
  }
};


// =====================================================
// ABOUT TEXTS
// =====================================================

const aboutTexts = {
  pt: `
    <p class="eyebrow">Projeto</p>
    <p>O INFO-ON é um guia interativo desenvolvido para apoiar a operação técnica da régie do Departamento de Cinema e Artes dos Media da Universidade Lusófona.</p>

    <h3>Histórico de versões</h3>
    <ul class="version-list">
      <li><strong>v1-v4</strong> — Estrutura inicial e protótipos.</li>
      <li><strong>v5</strong> — Primeira versão profissional.</li>
      <li><strong>v6</strong> — Procedimentos completos.</li>
      <li><strong>v7</strong> — Melhorias de navegação.</li>
      <li><strong>v8</strong> — Documento Work in Progress.</li>
      <li><strong>v9</strong> — Streaming dedicado.</li>
      <li><strong>v10</strong> — Estrutura centrada.</li>
      <li><strong>v11</strong> — Melhorias organizacionais.</li>
      <li><strong>v12</strong> — Consolidação técnica.</li>
      <li><strong>v13</strong> — Sistema de imagens locais.</li>
      <li><strong>v14</strong> — Português / Inglês.</li>
      <li><strong>v15</strong> — Responsividade e identidade visual.</li>
      <li><strong>v16</strong> — Evolução para INFO-ON.</li>
    </ul>
  `,

  en: ` 
    <p class="eyebrow">Project</p>
    <p>INFO-ON is an interactive guide developed to support the technical operation of the control room of the Cinema and Media Arts Department at Universidade Lusófona.</p>

    <h3>Version History</h3>
    <ul class="version-list">
      <li><strong>v1-v4</strong> — Initial structure and prototypes.</li>
      <li><strong>v5</strong> — First professional release.</li>
      <li><strong>v6</strong> — Complete procedures.</li>
      <li><strong>v7</strong> — Navigation improvements.</li>
      <li><strong>v8</strong> — Work In Progress document.</li>
      <li><strong>v9</strong> — Dedicated streaming.</li>
      <li><strong>v10</strong> — Centered structure.</li>
      <li><strong>v11</strong> — Organizational improvements.</li>
      <li><strong>v12</strong> — Technical consolidation.</li>
      <li><strong>v13</strong> — Local image system.</li>
      <li><strong>v14</strong> — Portuguese / English.</li>
      <li><strong>v15</strong> — Responsiveness and visual identity.</li>
      <li><strong>v16</strong> — Evolution to INFO-ON.</li>
    </ul>
  `
};


// =====================================================
// STATE
// =====================================================

let currentLanguage = localStorage.getItem("infoon_language") || "pt";
let procedures = proceduresData[currentLanguage];
let activeProcedure = null;
let activeProcedureId = null;


// =====================================================
// LANGUAGE
// =====================================================

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("infoon_language", lang);

  procedures = proceduresData[lang];
  document.documentElement.lang = lang === "pt" ? "pt-PT" : "en";

  applyTranslations();
  updateMiniProgress();

  if (activeProcedureId) {
    activeProcedure = procedures[activeProcedureId];
    document.getElementById("procedure-title").textContent = activeProcedure.title;
    renderSteps();
  }
}

function applyTranslations() {
  const t = ui[currentLanguage];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) el.textContent = t[key];
  });

  document.getElementById("lang-pt")?.classList.toggle("active", currentLanguage === "pt");
  document.getElementById("lang-en")?.classList.toggle("active", currentLanguage === "en");
}


// =====================================================
// NAVIGATION
// =====================================================

function hideAll() {
  [
    "home",
    "area-estudios",
    "rule-view",
    "area-regie",
    "procedure-view",
    "area-vp",
    "area-videoteca",
    "area-reshape"
  ].forEach((id) => {
    document.getElementById(id)?.classList.add("hidden");
  });
}

function goHome() {
  hideAll();
  document.getElementById("home").classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openArea(area) {
  hideAll();
  const target = document.getElementById(`area-${area}`);
  if (!target) {
    console.warn(`openArea: missing section area-${area}, returning home`);
    document.getElementById("home")?.classList.remove("hidden");
    return;
  }
  target.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}


// =====================================================
// RULES
// =====================================================

function openRule(id) {
  const title = ruleNames[currentLanguage][id];
  const rules = studioRules[currentLanguage][id];

  hideAll();

  document.getElementById("rule-view").classList.remove("hidden");
  document.getElementById("rule-title").textContent = title;

  document.getElementById("rule-content").innerHTML = `
    <article class="step-card">
      <div>
        <h3>${title}</h3>
        <ul>
          ${rules.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>

      <div class="media-box">
        <div>
          <strong>${ui[currentLanguage].mediaTitle}</strong>
          <span>${ui[currentLanguage].mediaPlaceholder}</span>
        </div>
      </div>
    </article>
  `;
}


// =====================================================
// PROCEDURES
// =====================================================

function openProcedure(id) {
  activeProcedureId = id;
  activeProcedure = procedures[id];

  hideAll();

  document.getElementById("procedure-view").classList.remove("hidden");
  document.getElementById("procedure-title").textContent = activeProcedure.title;

  renderSteps();

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeProcedure() {
  activeProcedure = null;
  activeProcedureId = null;
  openArea("regie");
}

function getSaved() {
  if (!activeProcedure) return [];
  return JSON.parse(localStorage.getItem(activeProcedure.storageKey) || "[]");
}

function saveState() {
  const checks = [...document.querySelectorAll(".step-check")];
  const state = checks.map((input) => input.checked);

  localStorage.setItem(activeProcedure.storageKey, JSON.stringify(state));

  updateProgress();
}

function renderSteps() {
  const t = ui[currentLanguage];
  const saved = getSaved();
  const container = document.getElementById("steps");

  container.innerHTML = "";

  activeProcedure.steps.forEach((step, index) => {
    const card = document.createElement("article");
    card.className = "step-card";

    const tasks = step.tasks
      .map((task) => {
        if (task.includes("3ec3")) {
          return `<li>${t.exampleKey}: <span class="key-example">3ec3-qhu3-bp5f-2dr1-11wj</span></li>`;
        }

        return `<li>${task}</li>`;
      })
      .join("");

    const note = step.warning
      ? `<div class="warning">${step.warning}</div>`
      : step.note
        ? `<p class="step-note">${step.note}</p>`
        : "";

    const media = step.image
      ? `<img src="${step.image}" class="step-image" onclick="openImage(this.src)">`
      : `
        <div>
          <strong>${t.mediaTitle}</strong>
          <span>${t.mediaPlaceholder}</span>
        </div>
      `;

    card.innerHTML = `
      <div>
        <div class="step-header">
          <div class="step-number">${index + 1}</div>

          <div>
            <h3 class="step-title">${step.title}</h3>
            ${note}
          </div>
        </div>

        <ul>${tasks}</ul>

        <label class="check-row">
          <input class="step-check" type="checkbox" ${saved[index] ? "checked" : ""}>
          ${t.stepDone}
        </label>
      </div>

      <div class="media-box">
        ${media}
      </div>
    `;

    container.appendChild(card);
  });

  document.querySelectorAll(".step-check").forEach((input) => {
    input.addEventListener("change", saveState);
  });

  updateProgress();
}

function markAllDone() {
  const state = activeProcedure.steps.map(() => true);
  localStorage.setItem(activeProcedure.storageKey, JSON.stringify(state));
  renderSteps();
}


// =====================================================
// PROGRESS
// =====================================================

function updateProgress() {
  const t = ui[currentLanguage];
  const checks = [...document.querySelectorAll(".step-check")];

  const done = checks.filter((input) => input.checked).length;
  const total = checks.length;
  const percent = total ? Math.round((done / total) * 100) : 0;

  checks.forEach((input) => {
    input.closest(".step-card").classList.toggle("done", input.checked);
  });

  document.getElementById("progress-text").textContent =
    `${percent}% ${t.progress} · ${done}/${total} ${t.steps}`;

  document.getElementById("progress-bar").style.width = `${percent}%`;

  updateMiniProgress();
}

function updateMiniProgress() {
  Object.entries(procedures).forEach(([id, proc]) => {
    const saved = JSON.parse(localStorage.getItem(proc.storageKey) || "[]");
    const done = saved.filter(Boolean).length;
    const percent = Math.round((done / proc.steps.length) * 100);

    const mini = document.getElementById(`mini-${id}`);
    if (mini) mini.style.width = `${percent}%`;
  });
}


// =====================================================
// MODALS
// =====================================================

function openImage(src) {
  document.getElementById("modalImage").src = src;
  document.getElementById("imageModal").classList.add("show");
}

function closeImage() {
  document.getElementById("imageModal").classList.remove("show");
}

function openAboutModal() {
  document.getElementById("aboutModal").classList.add("show");
  setAboutLanguage(currentLanguage);
}

function closeAboutModal() {
  document.getElementById("aboutModal").classList.remove("show");
}

function setAboutLanguage(lang) {
  document.getElementById("about-content").innerHTML = aboutTexts[lang];

  document.getElementById("about-pt").classList.toggle("active", lang === "pt");
  document.getElementById("about-en").classList.toggle("active", lang === "en");
}


// =====================================================
// EVENTS
// =====================================================

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeImage();
    closeAboutModal();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  applyTranslations();
  updateMiniProgress();

  document.getElementById("imageModal").addEventListener("click", (event) => {
    if (event.target.id === "imageModal") closeImage();
  });

  document.getElementById("aboutModal").addEventListener("click", (event) => {
    if (event.target.id === "aboutModal") closeAboutModal();
  });
});
