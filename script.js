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
    areaVPDesc: "Manual de Orientação",
    areaVPTitle: "VP - Produção Virtual",
    vpCardVirtualSets: "Tipos de Cenários Virtuais",
    vpCardLedVolume: "Técnicas de LED Volume e ICVFX",
    vpCardCameraTracking: "Métodos de Camera Tracking",
    vpCardPrevisualisation: "Planeamento e Pré-visualização",
    vpCardVirtualScouting: "Métodos de Virtual Scouting",
    vpCardSetExtension: "Técnicas de Set Extension",
    vpCardVirtualLighting: "Técnicas de Iluminação Virtual",
    vpCardChroma: "Composição Chroma Key em Tempo Real",
    vpCardMotionCapture: "Métodos de Captura de Movimento",
    vpCardPerformanceCapture: "Captura Integrada de Performance",
    vpCardRealtimeRendering: "Renderização em Tempo Real",
    vpCardVirtualCameras: "Sistemas de Câmara Virtual",
    vpCardPhysicalDigital: "Integração Física-Digital",
    vpCardAugmentedXR: "Realidade Aumentada e Estendida",
    vpCardRemoteProduction: "Produção Virtual Remota",
    vpCardVirtualBroadcast: "Emissão em Estúdio Virtual",
    vpCardWorkflow: "Fluxo de Produção Virtual",
    vpCardBrainstorm: "Ideação em Produção Virtual",
    vpVirtualSetsTag: "Virtual Sets",
    vpVirtualSets: "Virtual Sets",
    vpVirtualSetsDesc: "Criação e gestão de cenários digitais para produção virtual.",
    vpTypeLedVolume: "LED Volume Sets",
    vpTypeLedVolumeDesc: "Painéis LED de grande formato apresentam o cenário digital em câmara e iluminam o espaço.",
    vpTypeGreenScreen: "Green Screen Virtual Sets",
    vpTypeGreenScreenDesc: "Um fundo verde é substituído por um cenário digital através de chroma key.",
    vpTypeXR: "Extended Reality (XR) Sets",
    vpTypeXRDesc: "Combina produção física com ambientes e elementos digitais em tempo real.",
    vpTypeAR: "Augmented Reality (AR) Sets",
    vpTypeARDesc: "Sobrepõe gráficos e objetos digitais à imagem captada pela câmara.",
    vpTypeMR: "Mixed Reality (MR) Sets",
    vpTypeMRDesc: "Integra objetos digitais no espaço físico, permitindo que interajam com o cenário.",
    vpTypeFullyVirtual: "Fully Virtual Sets",
    vpTypeFullyVirtualDesc: "Cenário criado integralmente em 3D, sem uma construção física correspondente.",
    vpTypeHybrid: "Hybrid Physical-Virtual Sets",
    vpTypeHybridDesc: "Combina elementos físicos reais com cenários e componentes digitais.",
    vpTypeSetExtensions: "Digital Set Extensions",
    vpTypeSetExtensionsDesc: "Alarga digitalmente um cenário físico para além dos limites construídos ou visíveis.",
    vpTypeRealtime3D: "Real-Time 3D Environments",
    vpTypeRealtime3DDesc: "Ambientes 3D renderizados em tempo real e ajustados à câmara e à ação.",
    vpTypeStudio: "Virtual Studio Sets",
    vpTypeStudioDesc: "Estúdio gerado digitalmente, com a câmara e o cenário integrados por tracking.",
    vpTypeImmersive: "Immersive Virtual Environments",
    vpTypeImmersiveDesc: "Espaço virtual envolvente que permite explorar o cenário em 360 graus.",
    vpTypeProjection: "Projection-Based Virtual Sets",
    vpTypeProjectionDesc: "Projetores cobrem superfícies físicas com imagens que formam o cenário.",
    vpLedVolumeTag: "LED Volume",
    vpLedVolume: "LED Volume / In-Camera VFX",
    vpLedVolumeDesc: "Integração de volume LED e efeitos visuais em câmara.",
    vpLedTypeFull: "Full LED Volume",
    vpLedTypeFullDesc: "Painéis LED envolvem o palco, substituindo as superfícies visíveis por um cenário digital.",
    vpLedTypePartial: "Partial LED Volume",
    vpLedTypePartialDesc: "Painéis LED cobrem apenas parte do palco e combinam-se com cenário físico.",
    vpLedTypeCurvedWall: "Curved LED Wall",
    vpLedTypeCurvedWallDesc: "Uma parede LED curva cria um fundo envolvente e reduz as quebras visuais entre painéis.",
    vpLedTypeFlatWall: "Flat LED Wall",
    vpLedTypeFlatWallDesc: "Uma parede LED plana apresenta o cenário digital numa única superfície frontal.",
    vpLedType360: "360° LED Volume",
    vpLedType360Desc: "Painéis LED rodeiam a área de filmagem para criar um ambiente visual contínuo em 360 graus.",
    vpLedTypeCeiling: "LED Ceiling",
    vpLedTypeCeilingDesc: "Painéis LED no teto mostram céu, elementos superiores ou fontes de luz do cenário.",
    vpLedTypeFloor: "LED Floor",
    vpLedTypeFloorDesc: "Um piso LED prolonga o cenário sob os atores e pode criar reflexos visuais realistas.",
    vpLedTypeMultiWall: "Multi-Wall LED Stage",
    vpLedTypeMultiWallDesc: "Várias paredes LED formam um palco com cantos e diferentes ângulos de câmara.",
    vpLedType25D: "2.5D In-Camera VFX",
    vpLedType25DDesc: "Planos digitais em camadas criam profundidade e paralaxe sem uma cena 3D completa.",
    vpLedTypeRealtime3D: "Real-Time 3D In-Camera VFX",
    vpLedTypeRealtime3DDesc: "Um motor 3D atualiza o cenário em tempo real de acordo com a câmara e o tracking.",
    vpLedTypeVideoPlate: "Video Plate Playback",
    vpLedTypeVideoPlateDesc: "Vídeos pré-renderizados são reproduzidos nos painéis LED como fundo da filmagem.",
    vpLedTypeSetExtension: "Digital Set Extension",
    vpLedTypeSetExtensionDesc: "O cenário digital prolonga o palco físico para além das dimensões do volume LED.",
    vpLedTypeFrustum: "Frustum-Based Rendering",
    vpLedTypeFrustumDesc: "A perspetiva do cenário é ajustada ao frustum da câmara para alinhar a imagem captada.",
    vpLedTypeMultiCamera: "Multi-Camera ICVFX",
    vpLedTypeMultiCameraDesc: "O sistema coordena tracking e perspetiva para filmagens com várias câmaras.",
    vpLedTypeHybrid: "Hybrid LED + Green Screen Workflow",
    vpLedTypeHybridDesc: "Combina painéis LED com chroma key para acomodar diferentes ângulos ou extensões do cenário.",
    vpCameraTrackingTag: "Tracking",
    vpCameraTracking: "Camera Tracking",
    vpCameraTrackingDesc: "Rastreio da câmara e alinhamento do set virtual.",
    vpTrackingTypeOptical: "Optical Tracking",
    vpTrackingTypeOpticalDesc: "Câmaras e sensores óticos calculam a posição e orientação da câmara no espaço.",
    vpTrackingTypeMarkerBased: "Marker-Based Tracking",
    vpTrackingTypeMarkerBasedDesc: "Marcadores visuais identificáveis permitem determinar a posição e rotação da câmara.",
    vpTrackingTypeMarkerless: "Markerless Tracking",
    vpTrackingTypeMarkerlessDesc: "O sistema acompanha características do espaço sem precisar de marcadores dedicados.",
    vpTrackingTypeInfrared: "Infrared Tracking",
    vpTrackingTypeInfraredDesc: "Câmaras infravermelhas detetam emissores ou refletores para calcular a posição da câmara.",
    vpTrackingTypeInsideOut: "Inside-Out Tracking",
    vpTrackingTypeInsideOutDesc: "Sensores montados na câmara observam o ambiente e calculam o movimento a partir do próprio dispositivo.",
    vpTrackingTypeOutsideIn: "Outside-In Tracking",
    vpTrackingTypeOutsideInDesc: "Sensores fixos no estúdio observam marcadores instalados na câmara ou no rig.",
    vpTrackingTypeMechanical: "Mechanical Tracking",
    vpTrackingTypeMechanicalDesc: "Um sistema mecânico articulado transmite a posição e orientação da câmara.",
    vpTrackingTypeEncoder: "Encoder-Based Tracking",
    vpTrackingTypeEncoderDesc: "Encoders medem os eixos de movimento de suportes, cabeças ou mecanismos da câmara.",
    vpTrackingTypeInertial: "Inertial Tracking",
    vpTrackingTypeInertialDesc: "Sensores inerciais estimam movimento e orientação através de aceleração e rotação.",
    vpTrackingTypeHybrid: "Hybrid Tracking",
    vpTrackingTypeHybridDesc: "Combina várias tecnologias de tracking para melhorar precisão e continuidade.",
    vpTrackingTypeLens: "Lens Tracking",
    vpTrackingTypeLensDesc: "Dados de foco, zoom e íris são enviados ao sistema para sincronizar a lente virtual.",
    vpTrackingTypeFreeRoaming: "Free-Roaming Camera Tracking",
    vpTrackingTypeFreeRoamingDesc: "Permite deslocar a câmara livremente pelo estúdio mantendo a posição virtual sincronizada.",
    vpTrackingTypeDollyRail: "Dolly / Rail Tracking",
    vpTrackingTypeDollyRailDesc: "Mede o percurso da câmara num dolly ou carril para reproduzir o movimento no cenário virtual.",
    vpTrackingTypeCraneJib: "Crane / Jib Tracking",
    vpTrackingTypeCraneJibDesc: "Regista os eixos e movimentos de gruas ou jibs para alinhar a perspetiva virtual.",
    vpTrackingTypeVirtualCamera: "Virtual Camera Tracking",
    vpTrackingTypeVirtualCameraDesc: "Controla a posição e orientação de uma câmara virtual dentro de um ambiente 3D.",
    vpPrevisualisationTag: "Previz",
    vpPrevisualisation: "Previz",
    vpPrevisualisationDesc: "Validação visual e planeamento antes da gravação.",
    vpPrevisOrderNote: "Os itens numerados abaixo seguem uma ordem de execução recomendada, nem tudo é usado.",
    vpPrevisTypePitchvis: "Pitchvis",
    vpPrevisTypePitchvisDesc: "Sequência visual usada para apresentar a ideia, o tom e a escala de um projeto.",
    vpPrevisTypePrevis: "Previs",
    vpPrevisTypePrevisDesc: "Animação ou visualização 3D que antecipa planos e sequências antes da produção.",
    vpPrevisTypeTechvis: "Techvis",
    vpPrevisTypeTechvisDesc: "Planeamento técnico de câmaras, lentes, rigs, iluminação e necessidades do set.",
    vpPrevisTypeStuntvis: "Stuntvis",
    vpPrevisTypeStuntvisDesc: "Simulação de ação e coreografia para planear movimentos e avaliar riscos de segurança.",
    vpPrevisTypePostvis: "Postvis",
    vpPrevisTypePostvisDesc: "Composição temporária de efeitos visuais usada para avaliar planos após a filmagem.",
    vpPrevisTypeScouting: "Virtual Scouting",
    vpPrevisTypeScoutingDesc: "Exploração virtual de locais e cenários para avaliar posições e percursos de câmara.",
    vpPrevisTypeShotPlanning: "Shot Planning",
    vpPrevisTypeShotPlanningDesc: "Definição de enquadramentos, lentes e composição para cada plano.",
    vpPrevisTypeCameraBlocking: "Camera Blocking",
    vpPrevisTypeCameraBlockingDesc: "Planeamento de posições e movimentos da câmara em relação à ação e ao cenário.",
    vpPrevisTypeLighting: "Lighting Previs",
    vpPrevisTypeLightingDesc: "Visualização antecipada da direção, intensidade e cor da iluminação.",
    vpPrevisTypeAnimation: "Animation Previs",
    vpPrevisTypeAnimationDesc: "Animação simplificada para testar ritmo, ação e duração de uma sequência.",
    vpPrevisTypeEnvironment: "Environment Previs",
    vpPrevisTypeEnvironmentDesc: "Estudo visual de cenários e ambientes para validar escala, percurso e composição.",
    vpPrevisTypePerformance: "Performance Previs",
    vpPrevisTypePerformanceDesc: "Planeamento de posições, gestos e interações dos intérpretes na cena.",
    vpVirtualScoutingTag: "Scouting",
    vpVirtualScouting: "Virtual Scouting",
    vpVirtualScoutingDesc: "Exploração de cenários e posicionamentos virtuais.",
    vpScoutingTypeDesktop: "Desktop Virtual Scouting",
    vpScoutingTypeDesktopDesc: "Exploração de um cenário 3D num computador para rever espaços, percursos e pontos de vista.",
    vpScoutingTypeVR: "VR Virtual Scouting",
    vpScoutingTypeVRDesc: "Visita imersiva ao cenário virtual com headset para avaliar escala e perspetivas.",
    vpScoutingTypeCollaborative: "Collaborative Virtual Scouting",
    vpScoutingTypeCollaborativeDesc: "Vários membros da equipa exploram e discutem o mesmo cenário virtual em conjunto.",
    vpScoutingTypeRealtime: "Real-Time Virtual Scouting",
    vpScoutingTypeRealtimeDesc: "Exploração de ambientes renderizados em tempo real, com alterações visíveis de imediato.",
    vpScoutingTypeEnvironment: "Environment Scouting",
    vpScoutingTypeEnvironmentDesc: "Análise do ambiente, dimensões, acessos e opções de localização ou cenário.",
    vpScoutingTypeCamera: "Camera Scouting",
    vpScoutingTypeCameraDesc: "Teste de posições, movimentos, lentes e enquadramentos de câmara no cenário.",
    vpScoutingTypeLighting: "Lighting Scouting",
    vpScoutingTypeLightingDesc: "Avaliação da direção da luz, sombras, fontes práticas e condições de iluminação.",
    vpScoutingTypeSetDesign: "Set Design Scouting",
    vpScoutingTypeSetDesignDesc: "Estudo da disposição, escala e elementos cenográficos no espaço virtual.",
    vpScoutingTypeBlocking: "Blocking and Staging Scouting",
    vpScoutingTypeBlockingDesc: "Planeamento da posição e movimentação de intérpretes e elementos da cena.",
    vpScoutingTypeTechnical: "Technical Scouting",
    vpScoutingTypeTechnicalDesc: "Verificação de requisitos técnicos, equipamentos, ligações, acessos e limitações do local.",
    vpSetExtensionTag: "Set Extension",
    vpSetExtension: "Set Extension",
    vpSetExtensionDesc: "Ampliação do cenário físico com elementos virtuais.",
    vpSetExtensionTypeDigital: "Digital Set Extension",
    vpSetExtensionTypeDigitalDesc: "Prolonga digitalmente o cenário para além dos elementos físicos construídos ou filmados.",
    vpSetExtensionType25D: "2.5D Set Extension",
    vpSetExtensionType25DDesc: "Combina planos digitais em camadas para acrescentar profundidade e paralaxe ao cenário.",
    vpSetExtensionType3D: "3D Set Extension",
    vpSetExtensionType3DDesc: "Acrescenta um ambiente tridimensional integrado com a perspetiva e o movimento da câmara.",
    vpSetExtensionTypeLED: "LED Set Extension",
    vpSetExtensionTypeLEDDesc: "Usa painéis LED para prolongar visualmente o cenário durante a captação em câmara.",
    vpSetExtensionTypeGreenScreen: "Green Screen Set Extension",
    vpSetExtensionTypeGreenScreenDesc: "Substitui áreas de chroma por elementos digitais que ampliam o cenário filmado.",
    vpSetExtensionTypeMattePainting: "Matte Painting Extension",
    vpSetExtensionTypeMattePaintingDesc: "Usa uma pintura digital para criar ou prolongar fundos e elementos distantes.",
    vpSetExtensionTypeProjection: "Projection-Based Set Extension",
    vpSetExtensionTypeProjectionDesc: "Projeta imagens mapeadas sobre superfícies físicas para expandir o espaço do cenário.",
    vpSetExtensionTypeRealtime: "Real-Time Set Extension",
    vpSetExtensionTypeRealtimeDesc: "Renderiza a extensão digital em tempo real, acompanhando a câmara e a cena.",
    vpSetExtensionTypeInCamera: "In-Camera Set Extension",
    vpSetExtensionTypeInCameraDesc: "Capta a extensão do cenário diretamente em câmara durante a produção.",
    vpSetExtensionTypePostProduction: "Post-Production Set Extension",
    vpSetExtensionTypePostProductionDesc: "Adiciona ou amplia elementos do cenário durante a composição em pós-produção.",
    vpSetExtensionTypeHybrid: "Hybrid Physical-Digital Set Extension",
    vpSetExtensionTypeHybridDesc: "Combina cenografia física com elementos digitais para ampliar o espaço filmado.",
    vpSetExtensionTypeEnvironment: "Environment Extension",
    vpSetExtensionTypeEnvironmentDesc: "Expande o ambiente visível com áreas digitais integradas ao cenário real.",
    vpVirtualLightingTag: "Virtual Lighting",
    vpVirtualLighting: "Virtual Lighting",
    vpVirtualLightingDesc: "Iluminação virtual e composição em tempo real.",
    vpLightingTypeRealtime: "Real-Time Lighting",
    vpLightingTypeRealtimeDesc: "A iluminação atualiza em tempo real em resposta à câmara, à cena ou aos controlos da equipa.",
    vpLightingTypeIBL: "Image-Based Lighting (IBL)",
    vpLightingTypeIBLDesc: "Usa uma imagem do ambiente para iluminar objetos virtuais com luz e cor coerentes.",
    vpLightingTypeHDRI: "HDRI Lighting",
    vpLightingTypeHDRIDesc: "Usa imagens panorâmicas de alto alcance dinâmico para iluminar e refletir o ambiente.",
    vpLightingTypeEnvironment: "Environment Lighting",
    vpLightingTypeEnvironmentDesc: "A luz do cenário virtual ilumina os objetos e contribui para a iluminação global.",
    vpLightingTypeLEDVolume: "LED Volume Lighting",
    vpLightingTypeLEDVolumeDesc: "A luz emitida pelos painéis LED integra-se na iluminação dos elementos físicos em cena.",
    vpLightingTypeInteractive: "Interactive Lighting",
    vpLightingTypeInteractiveDesc: "Parâmetros de luz podem ser ajustados durante a produção através de controlos interativos.",
    vpLightingTypeDynamic: "Dynamic Lighting",
    vpLightingTypeDynamicDesc: "A intensidade, cor ou posição da luz muda ao longo da cena ou em resposta à ação.",
    vpLightingTypePractical: "Practical-to-Virtual Lighting",
    vpLightingTypePracticalDesc: "Luzes práticas do cenário são combinadas e alinhadas com fontes virtuais correspondentes.",
    vpLightingTypeKey: "Virtual Key Lighting",
    vpLightingTypeKeyDesc: "Luz principal virtual define a direção e o caráter dominante da iluminação do sujeito.",
    vpLightingTypeFill: "Virtual Fill Lighting",
    vpLightingTypeFillDesc: "Luz de preenchimento virtual suaviza sombras e controla o contraste do sujeito.",
    vpLightingTypeBack: "Virtual Backlighting",
    vpLightingTypeBackDesc: "Luz virtual atrás do sujeito cria recorte e separação em relação ao fundo.",
    vpLightingTypeEmissive: "Emissive Lighting",
    vpLightingTypeEmissiveDesc: "Materiais luminosos do cenário virtual funcionam como fontes de luz para a cena.",
    vpLightingTypeReflection: "Reflection Lighting",
    vpLightingTypeReflectionDesc: "Reflexos virtuais reproduzem fontes e ambientes refletidos nas superfícies dos objetos.",
    vpLightingTypeShadow: "Shadow Matching",
    vpLightingTypeShadowDesc: "Direção, intensidade e suavidade das sombras virtuais são alinhadas às sombras reais.",
    vpLightingTypeLinking: "Light Linking",
    vpLightingTypeLinkingDesc: "Define quais luzes afetam cada objeto, permitindo controlar a iluminação por elemento.",
    vpLightingTypeDMX: "DMX-Controlled Virtual Lighting",
    vpLightingTypeDMXDesc: "Controlos DMX sincronizam luminárias físicas e parâmetros de iluminação virtual.",
    vpLightingTypePBR: "Physically Based Lighting",
    vpLightingTypePBRDesc: "Simula luz e materiais segundo propriedades físicas para obter resultados consistentes.",
    vpLightingTypeHybrid: "Hybrid Physical-Virtual Lighting",
    vpLightingTypeHybridDesc: "Combina luminárias físicas e luzes virtuais para integrar atores e cenário digital.",
    vpChromaTag: "Chroma",
    vpChroma: "Real-Time Chroma Key",
    vpChromaDesc: "Chroma key em tempo real e integração da imagem.",
    vpChromaTypeGreenScreen: "Green Screen Keying",
    vpChromaTypeGreenScreenDesc: "Remove o fundo verde da imagem para o substituir por um cenário ou composição digital.",
    vpChromaTypeBlueScreen: "Blue Screen Keying",
    vpChromaTypeBlueScreenDesc: "Remove o fundo azul da imagem para revelar o cenário digital composto por trás do sujeito.",
    vpChromaTypeCompositing: "Real-Time Compositing",
    vpChromaTypeCompositingDesc: "Combina a imagem captada e os elementos digitais numa composição final durante a filmagem.",
    vpChromaTypeMultiLayer: "Multi-Layer Compositing",
    vpChromaTypeMultiLayerDesc: "Combina várias camadas de imagem, máscaras e elementos digitais numa única composição.",
    vpChromaTypeMatte: "Garbage Matte / Holdout Matte",
    vpChromaTypeMatteDesc: "Máscaras excluem áreas indesejadas ou ocultam partes da composição para controlar a imagem composta.",
    vpChromaTypeSpill: "Spill Suppression",
    vpChromaTypeSpillDesc: "Reduz a cor do fundo refletida nas bordas e superfícies do sujeito filmado.",
    vpChromaTypeEdge: "Edge Refinement",
    vpChromaTypeEdgeDesc: "Refina as bordas recortadas, preservando detalhes finos como cabelo e transparências.",
    vpChromaTypeLightWrap: "Light Wrap",
    vpChromaTypeLightWrapDesc: "Integra a luz e as cores do fundo digital nas bordas do sujeito para uma composição mais natural.",
    vpChromaTypeShadow: "Shadow Integration",
    vpChromaTypeShadowDesc: "Integra sombras reais ou digitais para ligar o sujeito ao cenário composto.",
    vpChromaTypeReflection: "Reflection Integration",
    vpChromaTypeReflectionDesc: "Preserva ou acrescenta reflexos coerentes com o cenário digital em superfícies refletoras.",
    vpChromaTypeBackground: "Real-Time Background Replacement",
    vpChromaTypeBackgroundDesc: "Substitui o fundo recortado por uma imagem ou ambiente digital durante a captação.",
    vpChromaTypeCameraTracked: "Camera-Tracked Chroma Key",
    vpChromaTypeCameraTrackedDesc: "Sincroniza o cenário composto com a posição e a perspetiva da câmara em movimento.",
    vpChromaTypeLensCalibrated: "Lens-Calibrated Compositing",
    vpChromaTypeLensCalibratedDesc: "Aplica calibração ótica para alinhar distorção, foco e perspetiva entre imagem e cenário.",
    vpChromaTypeDepth: "Depth-Based Compositing",
    vpChromaTypeDepthDesc: "Usa dados de profundidade para definir oclusões e a ordem espacial dos elementos compostos.",
    vpChromaTypeMultiCamera: "Multi-Camera Chroma Key",
    vpChromaTypeMultiCameraDesc: "Coordena recorte, cor e composição de chroma key em várias câmaras.",
    vpChromaTypeHybridAR: "Hybrid Chroma Key + AR",
    vpChromaTypeHybridARDesc: "Combina recorte chroma com gráficos e objetos de realidade aumentada em tempo real.",
    vpChromaTypeColourMatching: "Real-Time Colour Matching",
    vpChromaTypeColourMatchingDesc: "Equilibra em tempo real cor, exposição e contraste entre o sujeito e o cenário digital.",
    vpChromaTypeVirtualSet: "Real-Time Virtual Set Integration",
    vpChromaTypeVirtualSetDesc: "Integra o sujeito recortado num cenário 3D acompanhado e composto em tempo real.",
    vpMotionCaptureTag: "Motion Capture",
    vpMotionCapture: "Motion Capture",
    vpMotionCaptureDesc: "Captura de movimento e sincronização de performance.",
    vpMotionTypeOptical: "Optical Motion Capture",
    vpMotionTypeOpticalDesc: "Câmaras captam marcadores ou características visuais para reconstruir o movimento em 3D.",
    vpMotionTypeMarkerBased: "Marker-Based Motion Capture",
    vpMotionTypeMarkerBasedDesc: "Marcadores colocados no corpo são rastreados por câmaras para medir movimentos com precisão.",
    vpMotionTypeMarkerless: "Markerless Motion Capture",
    vpMotionTypeMarkerlessDesc: "Visão computacional estima a pose e o movimento corporal sem marcadores físicos.",
    vpMotionTypeInertial: "Inertial Motion Capture",
    vpMotionTypeInertialDesc: "Sensores inerciais usados no corpo estimam orientação e movimento sem câmaras externas.",
    vpMotionTypeMagnetic: "Magnetic Motion Capture",
    vpMotionTypeMagneticDesc: "Sensores medem a posição e orientação através de campos magnéticos gerados pelo sistema.",
    vpMotionTypeMechanical: "Mechanical Motion Capture",
    vpMotionTypeMechanicalDesc: "Um exoesqueleto ou conjunto articulado mede mecanicamente os movimentos do corpo.",
    vpMotionTypeFacial: "Facial Motion Capture",
    vpMotionTypeFacialDesc: "Regista expressões e movimentos faciais para os aplicar a um personagem digital.",
    vpMotionTypeBody: "Body Motion Capture",
    vpMotionTypeBodyDesc: "Capta os movimentos do corpo para reconstruir a pose e a atuação de um intérprete.",
    vpMotionTypeHand: "Hand and Finger Tracking",
    vpMotionTypeHandDesc: "Rastreia mãos e dedos para reproduzir gestos e movimentos finos em tempo real.",
    vpMotionTypePerformance: "Performance Capture",
    vpMotionTypePerformanceDesc: "Combina movimentos corporais e, quando necessário, faciais para registar a atuação completa.",
    vpMotionTypeRealtime: "Real-Time Motion Capture",
    vpMotionTypeRealtimeDesc: "Transmite dados de movimento durante a captação para visualização e utilização imediatas.",
    vpMotionTypeRetargeting: "Live Retargeting",
    vpMotionTypeRetargetingDesc: "Mapeia em direto os movimentos captados para o rig e as proporções de um personagem digital.",
    vpMotionTypeCharacterAnimation: "Virtual Character Animation",
    vpMotionTypeCharacterAnimationDesc: "Anima um personagem digital usando dados captados ou controlos de animação virtuais.",
    vpMotionTypeMultiActor: "Multi-Actor Motion Capture",
    vpMotionTypeMultiActorDesc: "Capta simultaneamente vários intérpretes e mantém os seus movimentos separados e sincronizados.",
    vpMotionTypeHybrid: "Hybrid Motion Capture",
    vpMotionTypeHybridDesc: "Combina métodos óticos, inerciais ou outros para melhorar cobertura e continuidade.",
    vpMotionTypeFullBody: "Full-Body Tracking",
    vpMotionTypeFullBodyDesc: "Rastreia o corpo inteiro para obter uma pose articulada da cabeça aos pés.",
    vpMotionTypeProps: "Props Tracking",
    vpMotionTypePropsDesc: "Rastreia objetos de cena para sincronizar a sua posição e rotação com a atuação.",
    vpMotionTypeCameraIntegration: "Camera Tracking Integration",
    vpMotionTypeCameraIntegrationDesc: "Sincroniza a captura corporal com o tracking da câmara e as coordenadas do cenário virtual.",
    vpPerformanceCaptureTag: "Performance Capture",
    vpPerformanceCapture: "Performance Capture",
    vpPerformanceCaptureDesc: "Gravação de performance com tracking e análise.",
    vpRealtimeRenderingTag: "Rendering",
    vpRealtimeRendering: "Real-Time Rendering",
    vpRealtimeRenderingDesc: "Renderização em tempo real para monitorização e validação.",
    vpVirtualCamerasTag: "Virtual Cameras",
    vpVirtualCameras: "Virtual Cameras",
    vpVirtualCamerasDesc: "Controlo de câmaras virtuais e composição digital.",
    vpPhysicalDigitalTag: "Integration",
    vpPhysicalDigital: "Physical-Digital Integration",
    vpPhysicalDigitalDesc: "Sincronização entre elementos físicos e digitais.",
    vpAugmentedXRTag: "AR + XR",
    vpAugmentedXR: "Augmented Reality and XR",
    vpAugmentedXRDesc: "Realidade aumentada, realidade estendida e integração visual.",
    vpRemoteProductionTag: "Remote",
    vpRemoteProduction: "Remote Production",
    vpRemoteProductionDesc: "Produção remota e colaboração distribuída.",
    vpVirtualBroadcastTag: "Broadcast",
    vpVirtualBroadcast: "Virtual Broadcast",
    vpVirtualBroadcastDesc: "Emissão virtual e operação de transmissão em ambiente digital.",
    vpWorkflowTag: "Workflow",
    vpWorkflow: "Virtual Production Workflow",
    vpWorkflowDesc: "Fluxo completo de produção virtual, validação e execução.",
    vpBrainstormTag: "Brainstorm",
    vpBrainstorm: "Brainstorm",
    vpBrainstormDesc: "Ideação, exploração criativa e desenvolvimento de conceitos para produção virtual.",
    areaVideoteca: "Videoteca",
    areaVideotecaDesc: "Coleção audiovisual para consulta",
    libraryLocationLabel: "Localização",
    libraryContactsLabel: "Contactos",
    libraryUseNote: "Todo o material é para utilização educativa e para fins de pesquisa.",
    libraryWarningLabel: "Aviso:",
    libraryReturnWarning: "Qualquer DVD não devolvido no prazo de 30 dias será debitado na conta do aluno pelo valor de cinco vezes o preço original.",
    libraryEntranceCaption: "Entrada da Film Library",
    libraryEntranceDescription: "Acesso à coleção audiovisual da Universidade Lusófona.",
    libraryCollectionCaption: "Coleção de filmes",
    libraryCollectionDescription: "Vista da porta e das estantes com filmes disponíveis para consulta.",
    areaVideotecaTitle: "Videoteca",
    areaReshape: "Reshape",
    areaReshapeDesc: "Portal para consultar e gerir reservas de estúdios, salas e equipamentos.",
    reshapeLoginCaption: "Login",
    reshapeLoginDescription: "Acesso protegido ao portal Reshape.",
    reshapeOverviewCaption: "Página geral",
    reshapeOverviewDescription: "Área para consultar e gerir requisições de salas e equipamentos.",
    reshapeOpenPortal: "Abrir portal Reshape",
    areaStudiosTitle: "Regras - Estúdios",

    generalProcedures: "Procedimentos Gerais",
    regieProcedures: "Procedimentos da Régie",

    backHome: "← Voltar",
    backButton: "← Voltar",

    security: "Segurança",
    securityCardTitle: "Segurança no Estúdio",
    bookings: "Reservas",
    bookingsCardTitle: "Informações sobre Reservas",
    cleaning: "Limpeza",
    cleaningCardTitle: "Como fazer a limpeza",
    equipment: "Equipamentos",
    equipmentCardTitle: "Equipamentos disponíveis",

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
    areaVPDesc: "Manual of Orientation",
    areaVPTitle: "VP - Virtual Production",
    vpCardVirtualSets: "Virtual Set Types",
    vpCardLedVolume: "LED Volume and ICVFX Techniques",
    vpCardCameraTracking: "Camera Tracking Methods",
    vpCardPrevisualisation: "Previsualisation and Planning",
    vpCardVirtualScouting: "Virtual Scouting Methods",
    vpCardSetExtension: "Set Extension Techniques",
    vpCardVirtualLighting: "Virtual Lighting Techniques",
    vpCardChroma: "Real-Time Chroma Key Compositing",
    vpCardMotionCapture: "Motion Capture Methods",
    vpCardPerformanceCapture: "Integrated Performance Capture",
    vpCardRealtimeRendering: "Real-Time Rendering",
    vpCardVirtualCameras: "Virtual Camera Systems",
    vpCardPhysicalDigital: "Physical-Digital Integration",
    vpCardAugmentedXR: "Augmented and Extended Reality",
    vpCardRemoteProduction: "Remote Virtual Production",
    vpCardVirtualBroadcast: "Virtual Studio Broadcasting",
    vpCardWorkflow: "Virtual Production Workflow",
    vpCardBrainstorm: "Virtual Production Ideation",
    vpVirtualSetsTag: "Virtual Sets",
    vpVirtualSets: "Virtual Sets",
    vpVirtualSetsDesc: "Creation and management of digital environments for virtual production.",
    vpTypeLedVolume: "LED Volume Sets",
    vpTypeLedVolumeDesc: "Large LED panels display the digital environment in camera and illuminate the set.",
    vpTypeGreenScreen: "Green Screen Virtual Sets",
    vpTypeGreenScreenDesc: "A green background is replaced with a digital environment using chroma key.",
    vpTypeXR: "Extended Reality (XR) Sets",
    vpTypeXRDesc: "Combines physical production with digital environments and elements in real time.",
    vpTypeAR: "Augmented Reality (AR) Sets",
    vpTypeARDesc: "Overlays digital graphics and objects onto the live camera image.",
    vpTypeMR: "Mixed Reality (MR) Sets",
    vpTypeMRDesc: "Places digital objects in physical space so they can interact with the surroundings.",
    vpTypeFullyVirtual: "Fully Virtual Sets",
    vpTypeFullyVirtualDesc: "An entirely computer-generated 3D environment with no matching physical set.",
    vpTypeHybrid: "Hybrid Physical-Virtual Sets",
    vpTypeHybridDesc: "Combines real physical elements with digital environments and components.",
    vpTypeSetExtensions: "Digital Set Extensions",
    vpTypeSetExtensionsDesc: "Digitally expands a physical set beyond its built or visible boundaries.",
    vpTypeRealtime3D: "Real-Time 3D Environments",
    vpTypeRealtime3DDesc: "3D environments rendered in real time and adapted to the camera and action.",
    vpTypeStudio: "Virtual Studio Sets",
    vpTypeStudioDesc: "A digitally generated studio with the camera and environment aligned through tracking.",
    vpTypeImmersive: "Immersive Virtual Environments",
    vpTypeImmersiveDesc: "An enveloping virtual space that can be explored in 360 degrees.",
    vpTypeProjection: "Projection-Based Virtual Sets",
    vpTypeProjectionDesc: "Projectors cover physical surfaces with images that create the set.",
    vpLedVolumeTag: "LED Volume",
    vpLedVolume: "LED Volume / In-Camera VFX",
    vpLedVolumeDesc: "Integration of LED volume and in-camera visual effects.",
    vpLedTypeFull: "Full LED Volume",
    vpLedTypeFullDesc: "LED panels surround the stage, replacing visible surfaces with a digital environment.",
    vpLedTypePartial: "Partial LED Volume",
    vpLedTypePartialDesc: "LED panels cover only part of the stage and combine with a physical set.",
    vpLedTypeCurvedWall: "Curved LED Wall",
    vpLedTypeCurvedWallDesc: "A curved LED wall creates an enveloping background and reduces visible joins between panels.",
    vpLedTypeFlatWall: "Flat LED Wall",
    vpLedTypeFlatWallDesc: "A flat LED wall displays the digital environment on a single front-facing surface.",
    vpLedType360: "360° LED Volume",
    vpLedType360Desc: "LED panels surround the filming area to create a continuous 360-degree visual environment.",
    vpLedTypeCeiling: "LED Ceiling",
    vpLedTypeCeilingDesc: "Overhead LED panels display skies, set elements above the scene, or light sources.",
    vpLedTypeFloor: "LED Floor",
    vpLedTypeFloorDesc: "An LED floor extends the environment beneath performers and can create realistic visual reflections.",
    vpLedTypeMultiWall: "Multi-Wall LED Stage",
    vpLedTypeMultiWallDesc: "Multiple LED walls form a stage with corners and varied camera angles.",
    vpLedType25D: "2.5D In-Camera VFX",
    vpLedType25DDesc: "Layered digital plates create depth and parallax without a complete 3D scene.",
    vpLedTypeRealtime3D: "Real-Time 3D In-Camera VFX",
    vpLedTypeRealtime3DDesc: "A 3D engine updates the environment in real time according to camera movement and tracking.",
    vpLedTypeVideoPlate: "Video Plate Playback",
    vpLedTypeVideoPlateDesc: "Pre-rendered videos play on LED panels as the background for filming.",
    vpLedTypeSetExtension: "Digital Set Extension",
    vpLedTypeSetExtensionDesc: "The digital environment extends the physical set beyond the dimensions of the LED volume.",
    vpLedTypeFrustum: "Frustum-Based Rendering",
    vpLedTypeFrustumDesc: "The environment perspective is adjusted to the camera frustum to align with the captured image.",
    vpLedTypeMultiCamera: "Multi-Camera ICVFX",
    vpLedTypeMultiCameraDesc: "The system coordinates tracking and perspective for filming with multiple cameras.",
    vpLedTypeHybrid: "Hybrid LED + Green Screen Workflow",
    vpLedTypeHybridDesc: "Combines LED panels and chroma key to support different angles or set extensions.",
    vpCameraTrackingTag: "Tracking",
    vpCameraTracking: "Camera Tracking",
    vpCameraTrackingDesc: "Camera tracking and alignment of the virtual set.",
    vpTrackingTypeOptical: "Optical Tracking",
    vpTrackingTypeOpticalDesc: "Optical cameras and sensors calculate the camera's position and orientation in space.",
    vpTrackingTypeMarkerBased: "Marker-Based Tracking",
    vpTrackingTypeMarkerBasedDesc: "Recognisable visual markers are used to determine the camera's position and rotation.",
    vpTrackingTypeMarkerless: "Markerless Tracking",
    vpTrackingTypeMarkerlessDesc: "The system follows features in the environment without dedicated markers.",
    vpTrackingTypeInfrared: "Infrared Tracking",
    vpTrackingTypeInfraredDesc: "Infrared cameras detect emitters or reflectors to calculate the camera's position.",
    vpTrackingTypeInsideOut: "Inside-Out Tracking",
    vpTrackingTypeInsideOutDesc: "Sensors mounted on the camera observe the environment and calculate movement from the device itself.",
    vpTrackingTypeOutsideIn: "Outside-In Tracking",
    vpTrackingTypeOutsideInDesc: "Fixed studio sensors observe markers mounted on the camera or rig.",
    vpTrackingTypeMechanical: "Mechanical Tracking",
    vpTrackingTypeMechanicalDesc: "An articulated mechanical system transmits the camera's position and orientation.",
    vpTrackingTypeEncoder: "Encoder-Based Tracking",
    vpTrackingTypeEncoderDesc: "Encoders measure movement axes on camera supports, heads or mechanisms.",
    vpTrackingTypeInertial: "Inertial Tracking",
    vpTrackingTypeInertialDesc: "Inertial sensors estimate movement and orientation from acceleration and rotation.",
    vpTrackingTypeHybrid: "Hybrid Tracking",
    vpTrackingTypeHybridDesc: "Combines multiple tracking technologies to improve accuracy and continuity.",
    vpTrackingTypeLens: "Lens Tracking",
    vpTrackingTypeLensDesc: "Focus, zoom and iris data are sent to the system to synchronise the virtual lens.",
    vpTrackingTypeFreeRoaming: "Free-Roaming Camera Tracking",
    vpTrackingTypeFreeRoamingDesc: "Lets the camera move freely around the studio while keeping its virtual position synchronised.",
    vpTrackingTypeDollyRail: "Dolly / Rail Tracking",
    vpTrackingTypeDollyRailDesc: "Measures camera travel on a dolly or rail to reproduce movement in the virtual environment.",
    vpTrackingTypeCraneJib: "Crane / Jib Tracking",
    vpTrackingTypeCraneJibDesc: "Records crane or jib axes and movement to align the virtual perspective.",
    vpTrackingTypeVirtualCamera: "Virtual Camera Tracking",
    vpTrackingTypeVirtualCameraDesc: "Controls the position and orientation of a virtual camera in a 3D environment.",
    vpPrevisualisationTag: "Previz",
    vpPrevisualisation: "Previz",
    vpPrevisualisationDesc: "Visual validation and planning before recording.",
    vpPrevisOrderNote: "The numbered items below indicate a recommended execution order; not all items are used.",
    vpPrevisTypePitchvis: "Pitchvis",
    vpPrevisTypePitchvisDesc: "A visual sequence used to present a project's idea, tone and scale.",
    vpPrevisTypePrevis: "Previs",
    vpPrevisTypePrevisDesc: "An animation or 3D visualisation that previews shots and sequences before production.",
    vpPrevisTypeTechvis: "Techvis",
    vpPrevisTypeTechvisDesc: "Technical planning for cameras, lenses, rigs, lighting and set requirements.",
    vpPrevisTypeStuntvis: "Stuntvis",
    vpPrevisTypeStuntvisDesc: "A simulation of action and choreography to plan movement and assess safety risks.",
    vpPrevisTypePostvis: "Postvis",
    vpPrevisTypePostvisDesc: "Temporary visual-effects compositing used to evaluate shots after filming.",
    vpPrevisTypeScouting: "Virtual Scouting",
    vpPrevisTypeScoutingDesc: "Virtual exploration of locations and sets to assess camera positions and routes.",
    vpPrevisTypeShotPlanning: "Shot Planning",
    vpPrevisTypeShotPlanningDesc: "Defining framing, lenses and composition for each shot.",
    vpPrevisTypeCameraBlocking: "Camera Blocking",
    vpPrevisTypeCameraBlockingDesc: "Planning camera positions and movement in relation to the action and set.",
    vpPrevisTypeLighting: "Lighting Previs",
    vpPrevisTypeLightingDesc: "Previewing the direction, intensity and colour of lighting.",
    vpPrevisTypeAnimation: "Animation Previs",
    vpPrevisTypeAnimationDesc: "Simplified animation used to test the pace, action and duration of a sequence.",
    vpPrevisTypeEnvironment: "Environment Previs",
    vpPrevisTypeEnvironmentDesc: "Visual study of sets and environments to validate scale, movement and composition.",
    vpPrevisTypePerformance: "Performance Previs",
    vpPrevisTypePerformanceDesc: "Planning performers' positions, gestures and interactions within a scene.",
    vpVirtualScoutingTag: "Scouting",
    vpVirtualScouting: "Virtual Scouting",
    vpVirtualScoutingDesc: "Exploration of environments and virtual positioning.",
    vpScoutingTypeDesktop: "Desktop Virtual Scouting",
    vpScoutingTypeDesktopDesc: "Explore a 3D environment on a computer to review spaces, routes and viewpoints.",
    vpScoutingTypeVR: "VR Virtual Scouting",
    vpScoutingTypeVRDesc: "An immersive visit to the virtual set using a headset to assess scale and perspectives.",
    vpScoutingTypeCollaborative: "Collaborative Virtual Scouting",
    vpScoutingTypeCollaborativeDesc: "Multiple team members explore and discuss the same virtual environment together.",
    vpScoutingTypeRealtime: "Real-Time Virtual Scouting",
    vpScoutingTypeRealtimeDesc: "Explore environments rendered in real time, with changes visible immediately.",
    vpScoutingTypeEnvironment: "Environment Scouting",
    vpScoutingTypeEnvironmentDesc: "Assess the environment, dimensions, access and location or set options.",
    vpScoutingTypeCamera: "Camera Scouting",
    vpScoutingTypeCameraDesc: "Test camera positions, movement, lenses and framing in the environment.",
    vpScoutingTypeLighting: "Lighting Scouting",
    vpScoutingTypeLightingDesc: "Evaluate light direction, shadows, practical sources and lighting conditions.",
    vpScoutingTypeSetDesign: "Set Design Scouting",
    vpScoutingTypeSetDesignDesc: "Study the layout, scale and scenic elements within the virtual space.",
    vpScoutingTypeBlocking: "Blocking and Staging Scouting",
    vpScoutingTypeBlockingDesc: "Plan performer positions and movement alongside scene elements.",
    vpScoutingTypeTechnical: "Technical Scouting",
    vpScoutingTypeTechnicalDesc: "Check technical requirements, equipment, connections, access and location constraints.",
    vpSetExtensionTag: "Set Extension",
    vpSetExtension: "Set Extension",
    vpSetExtensionDesc: "Extension of the physical set with virtual elements.",
    vpSetExtensionTypeDigital: "Digital Set Extension",
    vpSetExtensionTypeDigitalDesc: "Digitally extends the set beyond the physical elements that were built or filmed.",
    vpSetExtensionType25D: "2.5D Set Extension",
    vpSetExtensionType25DDesc: "Combines layered digital planes to add depth and parallax to the set.",
    vpSetExtensionType3D: "3D Set Extension",
    vpSetExtensionType3DDesc: "Adds a three-dimensional environment aligned with camera perspective and movement.",
    vpSetExtensionTypeLED: "LED Set Extension",
    vpSetExtensionTypeLEDDesc: "Uses LED panels to visually extend the set during in-camera capture.",
    vpSetExtensionTypeGreenScreen: "Green Screen Set Extension",
    vpSetExtensionTypeGreenScreenDesc: "Replaces chroma-key areas with digital elements that extend the filmed set.",
    vpSetExtensionTypeMattePainting: "Matte Painting Extension",
    vpSetExtensionTypeMattePaintingDesc: "Uses digital painting to create or extend backgrounds and distant elements.",
    vpSetExtensionTypeProjection: "Projection-Based Set Extension",
    vpSetExtensionTypeProjectionDesc: "Projects mapped imagery onto physical surfaces to expand the set space.",
    vpSetExtensionTypeRealtime: "Real-Time Set Extension",
    vpSetExtensionTypeRealtimeDesc: "Renders the digital extension in real time, tracking the camera and scene.",
    vpSetExtensionTypeInCamera: "In-Camera Set Extension",
    vpSetExtensionTypeInCameraDesc: "Captures the set extension directly in camera during production.",
    vpSetExtensionTypePostProduction: "Post-Production Set Extension",
    vpSetExtensionTypePostProductionDesc: "Adds or extends set elements during post-production compositing.",
    vpSetExtensionTypeHybrid: "Hybrid Physical-Digital Set Extension",
    vpSetExtensionTypeHybridDesc: "Combines physical scenery with digital elements to expand the filmed space.",
    vpSetExtensionTypeEnvironment: "Environment Extension",
    vpSetExtensionTypeEnvironmentDesc: "Expands the visible environment with digital areas integrated into the real set.",
    vpVirtualLightingTag: "Virtual Lighting",
    vpVirtualLighting: "Virtual Lighting",
    vpVirtualLightingDesc: "Virtual lighting and composition in real time.",
    vpLightingTypeRealtime: "Real-Time Lighting",
    vpLightingTypeRealtimeDesc: "Lighting updates in real time in response to the camera, scene or team controls.",
    vpLightingTypeIBL: "Image-Based Lighting (IBL)",
    vpLightingTypeIBLDesc: "Uses an environment image to illuminate virtual objects with consistent light and colour.",
    vpLightingTypeHDRI: "HDRI Lighting",
    vpLightingTypeHDRIDesc: "Uses high-dynamic-range panoramic images to illuminate and reflect the environment.",
    vpLightingTypeEnvironment: "Environment Lighting",
    vpLightingTypeEnvironmentDesc: "Light from the virtual environment illuminates objects and contributes to global illumination.",
    vpLightingTypeLEDVolume: "LED Volume Lighting",
    vpLightingTypeLEDVolumeDesc: "Light emitted by LED panels contributes to the lighting of physical elements on set.",
    vpLightingTypeInteractive: "Interactive Lighting",
    vpLightingTypeInteractiveDesc: "Lighting parameters can be adjusted during production through interactive controls.",
    vpLightingTypeDynamic: "Dynamic Lighting",
    vpLightingTypeDynamicDesc: "Light intensity, colour or position changes throughout a scene or in response to action.",
    vpLightingTypePractical: "Practical-to-Virtual Lighting",
    vpLightingTypePracticalDesc: "Practical set lights are combined and aligned with corresponding virtual sources.",
    vpLightingTypeKey: "Virtual Key Lighting",
    vpLightingTypeKeyDesc: "Virtual key light establishes the main direction and character of light on the subject.",
    vpLightingTypeFill: "Virtual Fill Lighting",
    vpLightingTypeFillDesc: "Virtual fill light softens shadows and controls contrast on the subject.",
    vpLightingTypeBack: "Virtual Backlighting",
    vpLightingTypeBackDesc: "Virtual light behind the subject creates an edge and separates it from the background.",
    vpLightingTypeEmissive: "Emissive Lighting",
    vpLightingTypeEmissiveDesc: "Luminous materials in the virtual set act as light sources for the scene.",
    vpLightingTypeReflection: "Reflection Lighting",
    vpLightingTypeReflectionDesc: "Virtual reflections reproduce light sources and environments on object surfaces.",
    vpLightingTypeShadow: "Shadow Matching",
    vpLightingTypeShadowDesc: "The direction, intensity and softness of virtual shadows are matched to real shadows.",
    vpLightingTypeLinking: "Light Linking",
    vpLightingTypeLinkingDesc: "Defines which lights affect each object, enabling per-element lighting control.",
    vpLightingTypeDMX: "DMX-Controlled Virtual Lighting",
    vpLightingTypeDMXDesc: "DMX controls synchronise physical fixtures with virtual lighting parameters.",
    vpLightingTypePBR: "Physically Based Lighting",
    vpLightingTypePBRDesc: "Simulates light and materials using physical properties for consistent results.",
    vpLightingTypeHybrid: "Hybrid Physical-Virtual Lighting",
    vpLightingTypeHybridDesc: "Combines physical fixtures and virtual lights to integrate performers with digital sets.",
    vpChromaTag: "Chroma",
    vpChroma: "Real-Time Chroma Key",
    vpChromaDesc: "Real-time chroma key and image integration.",
    vpChromaTypeGreenScreen: "Green Screen Keying",
    vpChromaTypeGreenScreenDesc: "Removes the green background so it can be replaced with a digital set or composite.",
    vpChromaTypeBlueScreen: "Blue Screen Keying",
    vpChromaTypeBlueScreenDesc: "Removes the blue background to reveal the digital environment composited behind the subject.",
    vpChromaTypeCompositing: "Real-Time Compositing",
    vpChromaTypeCompositingDesc: "Combines the captured image and digital elements into a final composite during filming.",
    vpChromaTypeMultiLayer: "Multi-Layer Compositing",
    vpChromaTypeMultiLayerDesc: "Combines multiple image layers, mattes and digital elements into one composite.",
    vpChromaTypeMatte: "Garbage Matte / Holdout Matte",
    vpChromaTypeMatteDesc: "Mattes exclude unwanted areas or hide parts of a composite to control the final image.",
    vpChromaTypeSpill: "Spill Suppression",
    vpChromaTypeSpillDesc: "Reduces screen colour reflected onto the edges and surfaces of the filmed subject.",
    vpChromaTypeEdge: "Edge Refinement",
    vpChromaTypeEdgeDesc: "Refines keyed edges while preserving fine details such as hair and transparency.",
    vpChromaTypeLightWrap: "Light Wrap",
    vpChromaTypeLightWrapDesc: "Blends background light and colour around the subject's edges for a more natural composite.",
    vpChromaTypeShadow: "Shadow Integration",
    vpChromaTypeShadowDesc: "Integrates real or digital shadows to connect the subject with the composited environment.",
    vpChromaTypeReflection: "Reflection Integration",
    vpChromaTypeReflectionDesc: "Preserves or adds reflections that match the digital environment on reflective surfaces.",
    vpChromaTypeBackground: "Real-Time Background Replacement",
    vpChromaTypeBackgroundDesc: "Replaces the keyed background with a digital image or environment during capture.",
    vpChromaTypeCameraTracked: "Camera-Tracked Chroma Key",
    vpChromaTypeCameraTrackedDesc: "Synchronises the composite environment with the position and perspective of a moving camera.",
    vpChromaTypeLensCalibrated: "Lens-Calibrated Compositing",
    vpChromaTypeLensCalibratedDesc: "Uses optical calibration to align distortion, focus and perspective between image and set.",
    vpChromaTypeDepth: "Depth-Based Compositing",
    vpChromaTypeDepthDesc: "Uses depth data to define occlusion and the spatial order of composited elements.",
    vpChromaTypeMultiCamera: "Multi-Camera Chroma Key",
    vpChromaTypeMultiCameraDesc: "Coordinates keying, colour and compositing across multiple cameras.",
    vpChromaTypeHybridAR: "Hybrid Chroma Key + AR",
    vpChromaTypeHybridARDesc: "Combines chroma keying with real-time augmented-reality graphics and objects.",
    vpChromaTypeColourMatching: "Real-Time Colour Matching",
    vpChromaTypeColourMatchingDesc: "Balances colour, exposure and contrast between the subject and digital environment in real time.",
    vpChromaTypeVirtualSet: "Real-Time Virtual Set Integration",
    vpChromaTypeVirtualSetDesc: "Integrates the keyed subject into a tracked 3D set composited in real time.",
    vpMotionCaptureTag: "Motion Capture",
    vpMotionCapture: "Motion Capture",
    vpMotionCaptureDesc: "Motion capture and performance synchronization.",
    vpMotionTypeOptical: "Optical Motion Capture",
    vpMotionTypeOpticalDesc: "Cameras capture markers or visual features to reconstruct movement in 3D.",
    vpMotionTypeMarkerBased: "Marker-Based Motion Capture",
    vpMotionTypeMarkerBasedDesc: "Markers worn on the body are tracked by cameras to measure movement precisely.",
    vpMotionTypeMarkerless: "Markerless Motion Capture",
    vpMotionTypeMarkerlessDesc: "Computer vision estimates body pose and movement without physical markers.",
    vpMotionTypeInertial: "Inertial Motion Capture",
    vpMotionTypeInertialDesc: "Body-worn inertial sensors estimate orientation and movement without external cameras.",
    vpMotionTypeMagnetic: "Magnetic Motion Capture",
    vpMotionTypeMagneticDesc: "Sensors measure position and orientation using magnetic fields generated by the system.",
    vpMotionTypeMechanical: "Mechanical Motion Capture",
    vpMotionTypeMechanicalDesc: "An exoskeleton or articulated rig mechanically measures body movement.",
    vpMotionTypeFacial: "Facial Motion Capture",
    vpMotionTypeFacialDesc: "Records facial expressions and movement to drive a digital character.",
    vpMotionTypeBody: "Body Motion Capture",
    vpMotionTypeBodyDesc: "Captures body movement to reconstruct a performer's pose and actions.",
    vpMotionTypeHand: "Hand and Finger Tracking",
    vpMotionTypeHandDesc: "Tracks hands and fingers to reproduce gestures and fine movements in real time.",
    vpMotionTypePerformance: "Performance Capture",
    vpMotionTypePerformanceDesc: "Combines body and, when needed, facial movement to record a complete performance.",
    vpMotionTypeRealtime: "Real-Time Motion Capture",
    vpMotionTypeRealtimeDesc: "Streams motion data during capture for immediate viewing and use.",
    vpMotionTypeRetargeting: "Live Retargeting",
    vpMotionTypeRetargetingDesc: "Maps captured movement live onto a digital character's rig and proportions.",
    vpMotionTypeCharacterAnimation: "Virtual Character Animation",
    vpMotionTypeCharacterAnimationDesc: "Animates a digital character using captured data or virtual animation controls.",
    vpMotionTypeMultiActor: "Multi-Actor Motion Capture",
    vpMotionTypeMultiActorDesc: "Captures several performers at once while keeping their movement separate and synchronised.",
    vpMotionTypeHybrid: "Hybrid Motion Capture",
    vpMotionTypeHybridDesc: "Combines optical, inertial or other methods to improve coverage and continuity.",
    vpMotionTypeFullBody: "Full-Body Tracking",
    vpMotionTypeFullBodyDesc: "Tracks the entire body to produce an articulated pose from head to toe.",
    vpMotionTypeProps: "Props Tracking",
    vpMotionTypePropsDesc: "Tracks props to synchronise their position and rotation with the performance.",
    vpMotionTypeCameraIntegration: "Camera Tracking Integration",
    vpMotionTypeCameraIntegrationDesc: "Synchronises body capture with camera tracking and virtual-environment coordinates.",
    vpPerformanceCaptureTag: "Performance Capture",
    vpPerformanceCapture: "Performance Capture",
    vpPerformanceCaptureDesc: "Performance recording with tracking and analysis.",
    vpRealtimeRenderingTag: "Rendering",
    vpRealtimeRendering: "Real-Time Rendering",
    vpRealtimeRenderingDesc: "Real-time rendering for monitoring and validation.",
    vpVirtualCamerasTag: "Virtual Cameras",
    vpVirtualCameras: "Virtual Cameras",
    vpVirtualCamerasDesc: "Control of virtual cameras and digital composition.",
    vpPhysicalDigitalTag: "Integration",
    vpPhysicalDigital: "Physical-Digital Integration",
    vpPhysicalDigitalDesc: "Synchronization between physical and digital elements.",
    vpAugmentedXRTag: "AR + XR",
    vpAugmentedXR: "Augmented Reality and XR",
    vpAugmentedXRDesc: "Augmented reality, extended reality and visual integration.",
    vpRemoteProductionTag: "Remote",
    vpRemoteProduction: "Remote Production",
    vpRemoteProductionDesc: "Remote production and distributed collaboration.",
    vpVirtualBroadcastTag: "Broadcast",
    vpVirtualBroadcast: "Virtual Broadcast",
    vpVirtualBroadcastDesc: "Virtual broadcast operations in a digital environment.",
    vpWorkflowTag: "Workflow",
    vpWorkflow: "Virtual Production Workflow",
    vpWorkflowDesc: "Complete virtual production flow, validation and execution.",
    vpBrainstormTag: "Brainstorm",
    vpBrainstorm: "Brainstorm",
    vpBrainstormDesc: "Ideation, creative exploration and concept development for virtual production.",
    areaVideoteca: "Film Library",
    areaVideotecaDesc: "Film and audiovisual collection for reference",
    libraryLocationLabel: "Location",
    libraryContactsLabel: "Contacts",
    libraryUseNote: "All materials are for educational use and research purposes.",
    libraryWarningLabel: "Notice:",
    libraryReturnWarning: "Any DVD not returned within 30 days will be charged to the student's account at five times its original price.",
    libraryEntranceCaption: "Film Library entrance",
    libraryEntranceDescription: "Access to Universidade Lusófona's audiovisual collection.",
    libraryCollectionCaption: "Film collection",
    libraryCollectionDescription: "View of the entrance and shelves with films available for consultation.",
    areaVideotecaTitle: "Film Library",
    areaReshape: "Reshape",
    areaReshapeDesc: "Portal to view and manage studio, room and equipment bookings.",
    reshapeLoginCaption: "Login",
    reshapeLoginDescription: "Secure access to the Reshape portal.",
    reshapeOverviewCaption: "Overview page",
    reshapeOverviewDescription: "Area for viewing and managing room and equipment requests.",
    reshapeOpenPortal: "Open Reshape portal",
    areaStudiosTitle: "Studio Rules",

    generalProcedures: "General Procedures",
    regieProcedures: "Control Room Procedures",

    backHome: "← Back",
    backButton: "← Back",

    security: "Safety",
    securityCardTitle: "Studio Safety",
    bookings: "Bookings",
    bookingsCardTitle: "Booking Information",
    cleaning: "Cleaning",
    cleaningCardTitle: "Cleaning Instructions",
    equipment: "Equipment",
    equipmentCardTitle: "Available Equipment",

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
      "<strong>Como efetuar uma reserva</strong>\n<p>As reservas dos estúdios podem ser efetuadas através da plataforma <a href=\"https://secure.ensinolusofona.pt/reshape/\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Reshape</strong></a> ou por <a href=\"mailto:joao.aguiar@ulusofona.pt\"><strong>e-mail</strong></a> para o Departamento de Cinema e Artes dos Media.</p>\n<p>Sempre que possível, deverá ser utilizada a plataforma <a href=\"https://secure.ensinolusofona.pt/reshape/\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Reshape</strong></a>, por permitir uma gestão mais eficiente da ocupação dos espaços.</p>",
      "<strong>Informação necessária</strong>\n<p>Ao efetuar uma reserva, deverão ser indicados os seguintes elementos:</p>\n<ul>\n  <li>Nome do responsável pela reserva;</li>\n  <li>Unidade curricular, projeto ou atividade;</li>\n  <li>Estúdio pretendido;</li>\n  <li>Data da utilização;</li>\n  <li>Hora de início e hora de fim;</li>\n  <li>Equipamentos adicionais, quando necessários.</li>\n</ul><br>",
      "<strong>Confirmação da reserva</strong>\n<p>A reserva apenas é considerada válida após confirmação pelo Departamento de Cinema e Artes dos Media.</p>\n<p>Antes da utilização do espaço, deverá ser verificado que a reserva foi confirmada e que o horário e o estúdio atribuídos correspondem ao solicitado.</p>",
      "<strong>Alterações e cancelamentos</strong>\n<p>Sempre que uma reserva deixe de ser necessária ou sofra alterações, o utilizador deverá proceder ao seu cancelamento no <a href=\"https://secure.ensinolusofona.pt/reshape/\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Reshape</strong></a> ou comunicar essa alteração por <a href=\"mailto:joao.aguiar@ulusofona.pt\"><strong>e-mail</strong></a>, com a maior antecedência possível.</p>\n<p>O cancelamento atempado permite disponibilizar o estúdio para outros utilizadores.</p>",
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
      "<strong>How to make a reservation</strong>\n<p>Studio reservations can be made through the <a href=\"https://secure.ensinolusofona.pt/reshape/\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Reshape</strong></a> platform or by <a href=\"mailto:joao.aguiar@ulusofona.pt\"><strong>email</strong></a> to the Department of Cinema and Media Arts.</p>\n<p>Whenever possible, the <a href=\"https://secure.ensinolusofona.pt/reshape/\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Reshape</strong></a> platform should be used, as it enables more efficient management of space occupancy.</p>",
      "<strong>Required information</strong>\n<p>When making a reservation, the following details should be provided:</p>\n<ul>\n  <li>Name of the person responsible for the booking;</li>\n  <li>Course unit, project or activity;</li>\n  <li>Requested studio;</li>\n  <li>Date of use;</li>\n  <li>Start and end time;</li>\n  <li>Any additional equipment required.</li>\n</ul><br>",
      "<strong>Reservation confirmation</strong>\n<p>A reservation is only considered valid after confirmation by the Department of Cinema and Media Arts.</p>\n<p>Prior to using the space, verify that the reservation has been confirmed and that the assigned time and studio match the request.</p>",
      "<strong>Changes and cancellations</strong>\n<p>If a reservation is no longer needed or requires changes, the user should cancel it on <a href=\"https://secure.ensinolusofona.pt/reshape/\" target=\"_blank\" rel=\"noopener noreferrer\"><strong>Reshape</strong></a> or notify the Department by <a href=\"mailto:joao.aguiar@ulusofona.pt\"><strong>email</strong></a> as early as possible.</p>\n<p>Timely cancellations make the studio available for other users.</p>",
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
      <li><strong>v17</strong> — Categorias de Produção Virtual com páginas e descrições próprias.</li>
      <li><strong>v18</strong> — Ordem de execução em Previs e melhorias de navegação.</li>
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
      <li><strong>v17</strong> — Virtual Production categories with dedicated pages and descriptions.</li>
      <li><strong>v18</strong> — Previs execution order and navigation improvements.</li>
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
let activeRuleId = null;
let activeVPTitleKey = null;


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

  if (activeRuleId) {
    openRule(activeRuleId);
  }

  if (activeVPTitleKey) {
    updateVPBreadcrumb(activeVPTitleKey);
  }
}

function createLanguageSwitcher() {
  const switcher = document.createElement("div");
  switcher.className = "language-switcher";
  switcher.innerHTML = `
    <button type="button" class="lang-pt-btn" data-lang="pt">PT</button>
    <button type="button" class="lang-en-btn" data-lang="en">EN</button>
  `;

  switcher.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });

  return switcher;
}

function injectLanguageSwitchers() {
  document.querySelectorAll(".section-top").forEach((top) => {
    if (top.querySelector(".language-switcher")) return;

    const switcher = createLanguageSwitcher();
    top.appendChild(switcher);
  });
}

function applyTranslations() {
  const t = ui[currentLanguage];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) el.textContent = t[key];
  });

  document.getElementById("lang-pt")?.classList.toggle("active", currentLanguage === "pt");
  document.getElementById("lang-en")?.classList.toggle("active", currentLanguage === "en");

  document.querySelectorAll(".lang-pt-btn, .lang-en-btn").forEach((button) => {
    button.classList.toggle("active", currentLanguage === button.dataset.lang);
  });
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
    "vp-detail",
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
  activeVPTitleKey = null;
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

function openVPPage(titleKey) {
  activeVPTitleKey = titleKey;
  const isTypeDetail = titleKey.startsWith("vpType") || titleKey.startsWith("vpLedType") || titleKey.startsWith("vpTrackingType") || titleKey.startsWith("vpPrevisType") || titleKey.startsWith("vpScoutingType") || titleKey.startsWith("vpSetExtensionType") || titleKey.startsWith("vpLightingType") || titleKey.startsWith("vpChromaType") || titleKey.startsWith("vpMotionType");
  updateVPBreadcrumb(titleKey);
  document.getElementById("vp-virtual-set-types").classList.toggle("hidden", titleKey !== "vpVirtualSets");
  document.getElementById("vp-led-volume-types").classList.toggle("hidden", titleKey !== "vpLedVolume");
  document.getElementById("vp-camera-tracking-types").classList.toggle("hidden", titleKey !== "vpCameraTracking");
  document.getElementById("vp-previsualisation-types").classList.toggle("hidden", titleKey !== "vpPrevisualisation");
  document.getElementById("vp-virtual-scouting-types").classList.toggle("hidden", titleKey !== "vpVirtualScouting");
  document.getElementById("vp-set-extension-types").classList.toggle("hidden", titleKey !== "vpSetExtension");
  document.getElementById("vp-virtual-lighting-types").classList.toggle("hidden", titleKey !== "vpVirtualLighting");
  document.getElementById("vp-chroma-types").classList.toggle("hidden", titleKey !== "vpChroma");
  document.getElementById("vp-motion-capture-types").classList.toggle("hidden", titleKey !== "vpMotionCapture");
  document.getElementById("vp-previs-order-note").classList.toggle("hidden", titleKey !== "vpPrevisualisation");
  document.getElementById("vp-type-description").classList.toggle("hidden", !isTypeDetail);
  document.getElementById("vp-type-description").dataset.i18n = `${titleKey}Desc`;
  document.getElementById("vp-type-description").textContent = isTypeDetail ? ui[currentLanguage][`${titleKey}Desc`] : "";
  const wipTitleKey = titleKey === "vpVirtualSets" ? "wipTitle" : "vpWipTitle";
  const wipTextKey = titleKey === "vpVirtualSets" ? "wipText" : "vpWipText";
  const wipNotice = document.getElementById("vp-detail-wip");
  const wipTitle = wipNotice.querySelector("strong");
  const wipText = wipNotice.querySelector("span");
  wipTitle.dataset.i18n = wipTitleKey;
  wipText.dataset.i18n = wipTextKey;
  wipTitle.textContent = ui[currentLanguage][wipTitleKey];
  wipText.textContent = ui[currentLanguage][wipTextKey];
  document.getElementById("vp-detail-wip").classList.toggle("hidden", isTypeDetail);
  hideAll();
  document.getElementById("vp-detail").classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateVPBreadcrumb(titleKey) {
  const isVirtualSetType = titleKey.startsWith("vpType");
  const isLedVolumeType = titleKey.startsWith("vpLedType");
  const isCameraTrackingType = titleKey.startsWith("vpTrackingType");
  const isPrevisualisationType = titleKey.startsWith("vpPrevisType");
  const isVirtualScoutingType = titleKey.startsWith("vpScoutingType");
  const isSetExtensionType = titleKey.startsWith("vpSetExtensionType");
  const isVirtualLightingType = titleKey.startsWith("vpLightingType");
  const isChromaType = titleKey.startsWith("vpChromaType");
  const isMotionCaptureType = titleKey.startsWith("vpMotionType");
  const isTypeDetail = isVirtualSetType || isLedVolumeType || isCameraTrackingType || isPrevisualisationType || isVirtualScoutingType || isSetExtensionType || isVirtualLightingType || isChromaType || isMotionCaptureType;
  const parentKey = isLedVolumeType || titleKey === "vpLedVolume"
    ? "vpLedVolume"
    : isCameraTrackingType || titleKey === "vpCameraTracking"
      ? "vpCameraTracking"
      : isPrevisualisationType || titleKey === "vpPrevisualisation"
        ? "vpPrevisualisation"
        : isVirtualScoutingType || titleKey === "vpVirtualScouting"
          ? "vpVirtualScouting"
          : isSetExtensionType || titleKey === "vpSetExtension"
            ? "vpSetExtension"
            : isVirtualLightingType || titleKey === "vpVirtualLighting"
              ? "vpVirtualLighting"
              : isChromaType || titleKey === "vpChroma"
                ? "vpChroma"
                : isMotionCaptureType || titleKey === "vpMotionCapture"
                  ? "vpMotionCapture"
                  : isVirtualSetType || titleKey === "vpVirtualSets"
                    ? "vpVirtualSets"
                    : titleKey;
  const parentLink = document.getElementById("vp-breadcrumb-parent-link");
  const parentCurrent = document.getElementById("vp-breadcrumb-parent-current");
  parentLink.classList.toggle("hidden", !isTypeDetail);
  parentCurrent.classList.toggle("hidden", isTypeDetail);
  parentLink.dataset.i18n = parentKey;
  parentCurrent.dataset.i18n = parentKey;
  parentLink.textContent = ui[currentLanguage][parentKey];
  parentCurrent.textContent = ui[currentLanguage][parentKey];
  document.getElementById("vp-breadcrumb-type-separator").classList.toggle("hidden", !isTypeDetail);
  document.getElementById("vp-breadcrumb-type").classList.toggle("hidden", !isTypeDetail);
  document.getElementById("vp-breadcrumb-type").textContent = isTypeDetail ? ui[currentLanguage][titleKey] : "";
}

function openVPParent() {
  if (activeVPTitleKey?.startsWith("vpLedType")) {
    openVPPage("vpLedVolume");
  } else if (activeVPTitleKey?.startsWith("vpTrackingType")) {
    openVPPage("vpCameraTracking");
  } else if (activeVPTitleKey?.startsWith("vpPrevisType")) {
    openVPPage("vpPrevisualisation");
  } else if (activeVPTitleKey?.startsWith("vpScoutingType")) {
    openVPPage("vpVirtualScouting");
  } else if (activeVPTitleKey?.startsWith("vpSetExtensionType")) {
    openVPPage("vpSetExtension");
  } else if (activeVPTitleKey?.startsWith("vpLightingType")) {
    openVPPage("vpVirtualLighting");
  } else if (activeVPTitleKey?.startsWith("vpChromaType")) {
    openVPPage("vpChroma");
  } else if (activeVPTitleKey?.startsWith("vpMotionType")) {
    openVPPage("vpMotionCapture");
  } else {
    openVPPage("vpVirtualSets");
  }
}

function closeVPPage() {
  if (activeVPTitleKey?.startsWith("vpType")) {
    openVPPage("vpVirtualSets");
    return;
  }
  if (activeVPTitleKey?.startsWith("vpLedType")) {
    openVPPage("vpLedVolume");
    return;
  }
  if (activeVPTitleKey?.startsWith("vpTrackingType")) {
    openVPPage("vpCameraTracking");
    return;
  }
  if (activeVPTitleKey?.startsWith("vpPrevisType")) {
    openVPPage("vpPrevisualisation");
    return;
  }
  if (activeVPTitleKey?.startsWith("vpScoutingType")) {
    openVPPage("vpVirtualScouting");
    return;
  }
  if (activeVPTitleKey?.startsWith("vpSetExtensionType")) {
    openVPPage("vpSetExtension");
    return;
  }
  if (activeVPTitleKey?.startsWith("vpLightingType")) {
    openVPPage("vpVirtualLighting");
    return;
  }
  if (activeVPTitleKey?.startsWith("vpChromaType")) {
    openVPPage("vpChroma");
    return;
  }
  if (activeVPTitleKey?.startsWith("vpMotionType")) {
    openVPPage("vpMotionCapture");
    return;
  }
  activeVPTitleKey = null;
  openArea("vp");
}


// =====================================================
// RULES
// =====================================================

function openRule(id) {
  activeRuleId = id;
  const title = ruleNames[currentLanguage][id];
  const rules = studioRules[currentLanguage][id];

  hideAll();

  document.getElementById("rule-view").classList.remove("hidden");
  document.getElementById("rule-title").textContent = title;

  document.getElementById("rule-content").innerHTML = `
    <article class="step-card">
      <div>
        <h3>${title}</h3>
        <ul class="${id === "seguranca" ? "safety-rules" : ""}">
          ${rules.map((item) => `<li>${item}</li>`).join("")}
        </ul>
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
  injectLanguageSwitchers();
  applyTranslations();
  updateMiniProgress();

  document.getElementById("imageModal").addEventListener("click", (event) => {
    if (event.target.id === "imageModal") closeImage();
  });

  document.getElementById("aboutModal").addEventListener("click", (event) => {
    if (event.target.id === "aboutModal") closeAboutModal();
  });
});
