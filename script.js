const proceduresData = {
  "pt": {
    "ligar-regie": {
      "title": "Ligar a Régie",
      "storageKey": "regieon_ligar-regie_v14",
      "steps": [
        {
          "title": "Ligar os MDU da Sala de Máquinas",
          "tasks": [
            "Ligar os MDU na sala de máquinas.",
            "Confirmar os LEDs de funcionamento.",
            "Verificar que os equipamentos arrancam sem erro."
          ],
          "note": "Este passo prepara a infraestrutura técnica antes da operação na régie."
        },
        {
          "title": "Ligar os MDU da Régie",
          "tasks": [
            "Ligar os MDU localizados na régie.",
            "Confirmar comunicação com a sala de máquinas.",
            "Verificar sinais ou indicadores de estado."
          ],
          "note": "Confirmar ligação antes de avançar para mesas e fontes."
        },
        {
          "title": "Ligar Mesas, PC das VT's e Mesa de Som",
          "tasks": [
            "Ligar a mesa da sala de máquinas.",
            "Ligar a mesa principal da régie.",
            "Ligar a mesa de som.",
            "Ligar o PC das VT's.",
            "Aguardar o arranque completo de todos os equipamentos.",
            "Confirmar que não existem mensagens de erro."
          ],
          "note": "Não avançar se algum equipamento apresentar erro no arranque."
        },
        {
          "title": "Ligar Monitores",
          "tasks": [
            "Ligar os monitores da régie.",
            "Confirmar imagem nos ecrãs.",
            "Verificar se as fontes aparecem nos monitores corretos."
          ],
          "note": "Os monitores devem permitir validar imagem antes de ligar câmaras."
        },
        {
          "title": "Ligar Cabos das Câmaras",
          "tasks": [
            "Ligar os cabos das câmaras.",
            "Confirmar SDI, fibra, rede ou controlo conforme aplicável.",
            "Confirmar que os cabos estão bem encaixados.",
            "Não ligar ainda o power das câmaras."
          ],
          "warning": "Atenção: os cabos devem ser ligados antes de ligar a alimentação das câmaras."
        },
        {
          "title": "Ligar as CCU",
          "tasks": [
            "Ligar as CCU.",
            "Confirmar alimentação e comunicação.",
            "Verificar sinal recebido de cada câmara.",
            "Confirmar que cada CCU corresponde à câmara correta."
          ],
          "note": "As CCU devem estar operacionais antes de ligar as câmaras."
        },
        {
          "title": "Ligar as Câmaras",
          "tasks": [
            "Ligar a Câmara 1 e confirmar vídeo.",
            "Ligar a Câmara 2 e confirmar vídeo.",
            "Ligar a Câmara 3 e confirmar vídeo.",
            "Confirmar tally quando aplicável.",
            "Confirmar comunicação com a régie quando aplicável."
          ],
          "note": "Validar cada câmara individualmente antes de passar à seguinte."
        },
        {
          "title": "Ligar a Flycase de Áudio",
          "tasks": [
            "Localizar a wallbox destinada ao áudio.",
            "Ligar o cabo de rede da flycase à wallbox correta.",
            "Confirmar que a ficha está bem encaixada.",
            "Ligar a flycase.",
            "Confirmar comunicação com a mesa de som."
          ],
          "note": "Usar apenas a wallbox destinada para este sistema."
        },
        {
          "title": "Verificar Áudio e Intercoms",
          "tasks": [
            "Testar todos os microfones necessários.",
            "Confirmar sinal na mesa de som.",
            "Verificar níveis de entrada.",
            "Confirmar retorno de áudio.",
            "Testar intercom com os operadores de câmara.",
            "Testar intercom com o assistente de realização.",
            "Confirmar que todos recebem e transmitem áudio corretamente."
          ],
          "note": "A comunicação entre realização, câmaras e assistente é obrigatória antes da operação."
        },
        {
          "title": "Teste Geral",
          "tasks": [
            "Confirmar imagem de todas as câmaras.",
            "Confirmar funcionamento das CCU.",
            "Confirmar áudio em todos os canais necessários.",
            "Confirmar intercoms.",
            "Confirmar VT's.",
            "Confirmar que a régie está pronta para produção, gravação ou transmissão."
          ],
          "note": "Só marcar concluído quando o sistema estiver validado em conjunto."
        }
      ]
    },
    "streaming": {
      "title": "Streaming",
      "storageKey": "regieon_streaming_v14",
      "steps": [
        {
          "title": "Verificar que a Régie está Operacional",
          "tasks": [
            "Confirmar que o procedimento Ligar a Régie foi concluído.",
            "Confirmar sinal de vídeo das câmaras.",
            "Confirmar áudio operacional.",
            "Confirmar intercoms operacionais."
          ],
          "note": "Não iniciar streaming sem validação de vídeo, áudio e comunicação."
        },
        {
          "title": "Aceder ao PC das VT's",
          "tasks": [
            "Confirmar que o PC das VT's está ligado.",
            "Efetuar login, se necessário.",
            "Confirmar ligação à Internet."
          ],
          "note": "O streaming é iniciado a partir do PC das VT's."
        },
        {
          "title": "Abrir o Blackmagic Streaming Utility",
          "tasks": [
            "Abrir a aplicação Blackmagic Streaming Utility.",
            "Confirmar que o dispositivo de streaming é reconhecido pela aplicação.",
            "Verificar se não existem mensagens de erro."
          ],
          "note": "A aplicação deve estar operacional antes de inserir a chave de transmissão."
        },
        {
          "title": "Inserir a Stream Key",
          "tasks": [
            "Introduzir a Stream Key fornecida para a transmissão.",
            "Confirmar que a Stream Key corresponde ao evento em curso.",
            "Exemplo de Stream Key: 3ec3-qhu3-bp5f-2dr1-11wj"
          ],
          "warning": "Utilizar sempre a chave correta fornecida para a transmissão.",
          "image": "assets/imagens/stream-key.jpg"
        },
        {
          "title": "Iniciar a Transmissão",
          "tasks": [
            "Confirmar novamente áudio e vídeo.",
            "Carregar no botão ON AIR.",
            "Confirmar que o estado muda para transmissão ativa.",
            "Verificar estado Connected, quando aplicável.",
            "Confirmar que o bitrate está a ser enviado, quando aplicável."
          ],
          "note": "Após carregar em ON AIR, não repetir o comando sem verificar o estado."
        },
        {
          "title": "Aguardar Início da Transmissão",
          "tasks": [
            "Aguardar aproximadamente 3 segundos.",
            "Não repetir o comando ON AIR durante este período.",
            "Confirmar que o estado se mantém ativo."
          ],
          "warning": "Existe normalmente um atraso de cerca de 3 segundos até a transmissão ficar efetivamente ativa."
        },
        {
          "title": "Validar Transmissão em Dispositivo Externo",
          "tasks": [
            "Abrir a transmissão num telemóvel, tablet ou computador diferente do PC das VT's.",
            "Confirmar presença de vídeo.",
            "Confirmar presença de áudio.",
            "Confirmar que a transmissão está efetivamente online.",
            "Informar a realização que o streaming se encontra operacional."
          ],
          "warning": "Nunca considerar a transmissão ativa sem validação num segundo dispositivo."
        },
        {
          "title": "Monitorizar Streaming",
          "tasks": [
            "Confirmar que a transmissão está ativa.",
            "Monitorizar a transmissão durante o evento.",
            "Reportar qualquer falha à realização."
          ],
          "note": "Manter vigilância ao estado da transmissão durante todo o evento."
        },
        {
          "title": "Confirmar Fim do Evento",
          "tasks": [
            "Confirmar com a realização que o evento terminou.",
            "Confirmar que já não existem conteúdos a transmitir."
          ],
          "note": "Não encerrar streaming antes da confirmação da realização."
        },
        {
          "title": "Parar a Gravação do Programa de TV",
          "tasks": [
            "Confirmar que a gravação está concluída.",
            "Parar a gravação do programa de TV.",
            "Confirmar que o ficheiro foi guardado corretamente."
          ],
          "warning": "A gravação do programa de TV deve ser parada antes de encerrar o streaming."
        },
        {
          "title": "Terminar a Transmissão",
          "tasks": [
            "No PC das VT's, verificar o Blackmagic Streaming Utility.",
            "Carregar no botão ON AIR para terminar a transmissão.",
            "Confirmar que o estado deixa de indicar transmissão ativa."
          ],
          "note": "O botão ON AIR funciona como controlo para terminar a emissão ativa."
        },
        {
          "title": "Aguardar Atualização do Estado",
          "tasks": [
            "Aguardar alguns segundos até a plataforma atualizar o estado da transmissão.",
            "Não voltar a pressionar o botão ON AIR durante este período."
          ],
          "warning": "Pode existir atraso até a plataforma apresentar a transmissão como encerrada."
        },
        {
          "title": "Validar Encerramento",
          "tasks": [
            "Verificar num segundo dispositivo: telemóvel, tablet ou computador.",
            "Confirmar que a transmissão já não está online.",
            "Confirmar ausência de vídeo e áudio em direto."
          ],
          "note": "A validação deve ser feita fora do PC das VT's."
        },
        {
          "title": "Confirmar Encerramento com a Realização",
          "tasks": [
            "Informar a realização que o streaming foi encerrado com sucesso.",
            "Registar qualquer anomalia ocorrida durante a transmissão."
          ],
          "note": "Este procedimento termina aqui. Não inclui o procedimento Desligar a Régie."
        }
      ]
    },
    "desligar-regie": {
      "title": "Desligar a Régie",
      "storageKey": "regieon_desligar-regie_v14",
      "steps": [
        {
          "title": "Confirmar Fim da Operação",
          "tasks": [
            "Confirmar que a gravação terminou.",
            "Confirmar que o streaming terminou, quando aplicável.",
            "Confirmar que não existem gravações pendentes.",
            "Informar a equipa que vai iniciar o encerramento."
          ],
          "warning": "Nunca desligar equipamentos antes de confirmar o fim da gravação/transmissão."
        },
        {
          "title": "Desligar as Câmaras",
          "tasks": [
            "Desligar a Câmara 1.",
            "Desligar a Câmara 2.",
            "Desligar a Câmara 3.",
            "Confirmar ausência de alimentação nas câmaras."
          ],
          "note": "O encerramento das câmaras deve ser feito antes de desligar as CCU."
        },
        {
          "title": "Desligar as CCU",
          "tasks": [
            "Desligar todas as CCU.",
            "Confirmar apagamento dos indicadores.",
            "Verificar que não fica sinal ativo indevido."
          ],
          "note": "Este passo é o inverso do arranque das CCU."
        },
        {
          "title": "Desligar a Flycase de Áudio",
          "tasks": [
            "Desligar a flycase.",
            "Desligar o cabo de rede da wallbox destinada.",
            "Arrumar o cabo corretamente.",
            "Confirmar que a wallbox fica livre e sem tensão indevida."
          ],
          "note": "Garantir que os cabos ficam acondicionados para a próxima utilização."
        },
        {
          "title": "Desligar Mesa de Som, Mesas e PC das VT's",
          "tasks": [
            "Encerrar corretamente o PC das VT's.",
            "Desligar a mesa de som.",
            "Desligar a mesa principal da régie.",
            "Desligar a mesa da sala de máquinas."
          ],
          "warning": "O PC das VT's deve ser encerrado corretamente, não apenas desligado da alimentação."
        },
        {
          "title": "Desligar Monitores",
          "tasks": [
            "Desligar todos os monitores da régie.",
            "Confirmar que não existem ecrãs ativos.",
            "Verificar se não há fontes ainda em utilização."
          ],
          "note": "Confirmar o estado dos monitores antes de desligar a restante infraestrutura."
        },
        {
          "title": "Desligar Cabos das Câmaras",
          "tasks": [
            "Desligar os cabos das câmaras.",
            "Verificar acondicionamento dos cabos.",
            "Confirmar que não existem cabos sob tensão.",
            "Arrumar cabos de forma organizada."
          ],
          "note": "Os cabos devem ficar preparados para a próxima montagem."
        },
        {
          "title": "Desligar os MDU da Régie",
          "tasks": [
            "Desligar os MDU da régie.",
            "Confirmar apagamento dos LEDs.",
            "Verificar que a régie fica sem sinais ativos desnecessários."
          ],
          "note": "Este passo deve ocorrer depois do encerramento dos equipamentos principais."
        },
        {
          "title": "Desligar os MDU da Sala de Máquinas",
          "tasks": [
            "Desligar os MDU da sala de máquinas.",
            "Confirmar apagamento dos indicadores.",
            "Confirmar desligamento total da infraestrutura."
          ],
          "note": "Último passo técnico antes da verificação final."
        },
        {
          "title": "Verificação Final",
          "tasks": [
            "Confirmar que todos os equipamentos estão desligados.",
            "Confirmar que os cabos estão organizados.",
            "Confirmar que a régie está limpa e pronta para a próxima utilização.",
            "Reportar qualquer anomalia encontrada."
          ],
          "note": "Só concluir quando a régie estiver pronta para a próxima equipa."
        }
      ]
    }
  },
  "en": {
    "ligar-regie": {
      "title": "Power On the Control Room",
      "storageKey": "regieon_ligar-regie_v14",
      "steps": [
        {
          "title": "Power on the MDUs in the Machine Room",
          "tasks": [
            "Power on the MDUs in the machine room.",
            "Confirm the status LEDs are on.",
            "Check that the equipment starts without errors."
          ],
          "note": "This step prepares the technical infrastructure before operating from the control room."
        },
        {
          "title": "Power on the MDUs in the Control Room",
          "tasks": [
            "Power on the MDUs located in the control room.",
            "Confirm communication with the machine room.",
            "Check status indicators."
          ],
          "note": "Confirm connectivity before moving on to consoles and sources."
        },
        {
          "title": "Power on Consoles, VT PC and Audio Mixer",
          "tasks": [
            "Power on the console in the machine room.",
            "Power on the main control room console.",
            "Power on the audio mixer.",
            "Power on the VT PC.",
            "Wait for all equipment to finish booting.",
            "Confirm there are no error messages."
          ],
          "note": "Do not continue if any device shows a startup error."
        },
        {
          "title": "Power on Monitors",
          "tasks": [
            "Power on the control room monitors.",
            "Confirm image is visible on the screens.",
            "Check that sources appear on the correct monitors."
          ],
          "note": "The monitors must allow video verification before powering cameras."
        },
        {
          "title": "Connect Camera Cables",
          "tasks": [
            "Connect the camera cables.",
            "Confirm SDI, fibre, network or control connections as applicable.",
            "Confirm cables are properly seated.",
            "Do not power on the cameras yet."
          ],
          "warning": "Attention: camera cables must be connected before powering the cameras."
        },
        {
          "title": "Power on the CCUs",
          "tasks": [
            "Power on the CCUs.",
            "Confirm power and communication.",
            "Check the signal received from each camera.",
            "Confirm each CCU matches the correct camera."
          ],
          "note": "The CCUs must be operational before powering on the cameras."
        },
        {
          "title": "Power on the Cameras",
          "tasks": [
            "Power on Camera 1 and confirm video.",
            "Power on Camera 2 and confirm video.",
            "Power on Camera 3 and confirm video.",
            "Confirm tally when applicable.",
            "Confirm communication with the control room when applicable."
          ],
          "note": "Validate each camera individually before moving to the next one."
        },
        {
          "title": "Connect the Audio Flycase",
          "tasks": [
            "Locate the dedicated audio wallbox.",
            "Connect the flycase network cable to the correct wallbox.",
            "Confirm the connector is properly seated.",
            "Power on the flycase.",
            "Confirm communication with the audio mixer."
          ],
          "note": "Use only the dedicated wallbox for this system."
        },
        {
          "title": "Check Audio and Intercoms",
          "tasks": [
            "Test all required microphones.",
            "Confirm signal on the audio mixer.",
            "Check input levels.",
            "Confirm audio return.",
            "Test intercom with camera operators.",
            "Test intercom with the assistant director.",
            "Confirm everyone can send and receive audio correctly."
          ],
          "note": "Communication between director, cameras and assistant director is mandatory before operation."
        },
        {
          "title": "General Test",
          "tasks": [
            "Confirm image from all cameras.",
            "Confirm CCU operation.",
            "Confirm audio on all required channels.",
            "Confirm intercoms.",
            "Confirm VTs.",
            "Confirm the control room is ready for production, recording or streaming."
          ],
          "note": "Only mark as complete after the full system is validated."
        }
      ]
    },
    "streaming": {
      "title": "Streaming",
      "storageKey": "regieon_streaming_v14",
      "steps": [
        {
          "title": "Confirm the Control Room is Operational",
          "tasks": [
            "Confirm the Power On the Control Room procedure is complete.",
            "Confirm video signal from cameras.",
            "Confirm audio is operational.",
            "Confirm intercoms are operational."
          ],
          "note": "Do not start streaming without video, audio and communication validation."
        },
        {
          "title": "Access the VT PC",
          "tasks": [
            "Confirm the VT PC is powered on.",
            "Log in if required.",
            "Confirm Internet connectivity."
          ],
          "note": "Streaming is started from the VT PC."
        },
        {
          "title": "Open Blackmagic Streaming Utility",
          "tasks": [
            "Open Blackmagic Streaming Utility.",
            "Confirm the streaming device is recognised by the application.",
            "Check that there are no error messages."
          ],
          "note": "The application must be operational before entering the stream key."
        },
        {
          "title": "Enter the Stream Key",
          "tasks": [
            "Enter the Stream Key provided for the broadcast.",
            "Confirm the Stream Key matches the current event.",
            "Example Stream Key: 3ec3-qhu3-bp5f-2dr1-11wj"
          ],
          "warning": "Always use the correct key provided for the broadcast.",
          "image": "assets/imagens/stream-key.jpg"
        },
        {
          "title": "Start the Broadcast",
          "tasks": [
            "Confirm audio and video again.",
            "Press the ON AIR button.",
            "Confirm the status changes to active broadcast.",
            "Check Connected status when applicable.",
            "Confirm bitrate is being sent when applicable."
          ],
          "note": "After pressing ON AIR, do not repeat the command before checking the status."
        },
        {
          "title": "Wait for the Broadcast to Start",
          "tasks": [
            "Wait approximately 3 seconds.",
            "Do not press ON AIR again during this period.",
            "Confirm the status remains active."
          ],
          "warning": "There is usually an approximately 3-second delay before the broadcast is effectively live."
        },
        {
          "title": "Validate the Broadcast on an External Device",
          "tasks": [
            "Open the stream on a phone, tablet or computer different from the VT PC.",
            "Confirm video is present.",
            "Confirm audio is present.",
            "Confirm the stream is actually online.",
            "Inform the director that streaming is operational."
          ],
          "warning": "Never consider the broadcast live without validation on a second device."
        },
        {
          "title": "Monitor Streaming",
          "tasks": [
            "Confirm the broadcast remains active.",
            "Monitor the stream during the event.",
            "Report any failure to the director."
          ],
          "note": "Keep monitoring the stream status throughout the event."
        },
        {
          "title": "Confirm the Event Has Ended",
          "tasks": [
            "Confirm with the director that the event has ended.",
            "Confirm there is no more content to broadcast."
          ],
          "note": "Do not stop streaming before confirmation from the director."
        },
        {
          "title": "Stop the TV Programme Recording",
          "tasks": [
            "Confirm the recording is complete.",
            "Stop the TV programme recording.",
            "Confirm the file was saved correctly."
          ],
          "warning": "The TV programme recording must be stopped before ending the stream."
        },
        {
          "title": "End the Broadcast",
          "tasks": [
            "On the VT PC, check Blackmagic Streaming Utility.",
            "Press ON AIR to end the broadcast.",
            "Confirm the status no longer indicates an active broadcast."
          ],
          "note": "The ON AIR button controls the active broadcast state."
        },
        {
          "title": "Wait for Status Update",
          "tasks": [
            "Wait a few seconds for the platform to update the broadcast status.",
            "Do not press ON AIR again during this period."
          ],
          "warning": "There may be a delay before the platform shows the broadcast as ended."
        },
        {
          "title": "Validate Shutdown",
          "tasks": [
            "Check on a second device: phone, tablet or computer.",
            "Confirm the stream is no longer online.",
            "Confirm there is no live video or audio."
          ],
          "note": "Validation must be done outside the VT PC."
        },
        {
          "title": "Confirm Shutdown with the Director",
          "tasks": [
            "Inform the director that streaming has ended successfully.",
            "Record any anomaly that occurred during the broadcast."
          ],
          "note": "This procedure ends here. It does not include the Power Off the Control Room procedure."
        }
      ]
    },
    "desligar-regie": {
      "title": "Power Off the Control Room",
      "storageKey": "regieon_desligar-regie_v14",
      "steps": [
        {
          "title": "Confirm End of Operation",
          "tasks": [
            "Confirm the recording has ended.",
            "Confirm streaming has ended, when applicable.",
            "Confirm there are no pending recordings.",
            "Inform the team that shutdown will begin."
          ],
          "warning": "Never power off equipment before confirming the end of recording/broadcast."
        },
        {
          "title": "Power off the Cameras",
          "tasks": [
            "Power off Camera 1.",
            "Power off Camera 2.",
            "Power off Camera 3.",
            "Confirm the cameras are no longer powered."
          ],
          "note": "Cameras should be powered off before powering off the CCUs."
        },
        {
          "title": "Power off the CCUs",
          "tasks": [
            "Power off all CCUs.",
            "Confirm indicators are off.",
            "Check that no incorrect active signal remains."
          ],
          "note": "This is the reverse of the CCU startup step."
        },
        {
          "title": "Power off the Audio Flycase",
          "tasks": [
            "Power off the flycase.",
            "Disconnect the network cable from the dedicated wallbox.",
            "Store the cable correctly.",
            "Confirm the wallbox is clear and not under inappropriate tension."
          ],
          "note": "Ensure cables are ready for the next use."
        },
        {
          "title": "Power off Audio Mixer, Consoles and VT PC",
          "tasks": [
            "Shut down the VT PC correctly.",
            "Power off the audio mixer.",
            "Power off the main control room console.",
            "Power off the machine room console."
          ],
          "warning": "The VT PC must be properly shut down, not just disconnected from power."
        },
        {
          "title": "Power off Monitors",
          "tasks": [
            "Power off all control room monitors.",
            "Confirm no screens remain active.",
            "Check there are no sources still in use."
          ],
          "note": "Confirm monitor status before powering off the remaining infrastructure."
        },
        {
          "title": "Disconnect Camera Cables",
          "tasks": [
            "Disconnect the camera cables.",
            "Check cable storage.",
            "Confirm there are no cables under tension.",
            "Store cables in an organised way."
          ],
          "note": "Cables should be ready for the next setup."
        },
        {
          "title": "Power off the Control Room MDUs",
          "tasks": [
            "Power off the control room MDUs.",
            "Confirm LEDs are off.",
            "Check that the control room has no unnecessary active signals."
          ],
          "note": "This step should happen after the main equipment shutdown."
        },
        {
          "title": "Power off the Machine Room MDUs",
          "tasks": [
            "Power off the machine room MDUs.",
            "Confirm indicators are off.",
            "Confirm full infrastructure shutdown."
          ],
          "note": "Last technical step before the final check."
        },
        {
          "title": "Final Check",
          "tasks": [
            "Confirm all equipment is powered off.",
            "Confirm cables are organised.",
            "Confirm the control room is clean and ready for the next use.",
            "Report any anomaly found."
          ],
          "note": "Only complete when the control room is ready for the next team."
        }
      ]
    }
  }
};

const ui = {
  "pt": {
    "brandSubtitle": "Cinema e Artes dos Media",
    "subtitle": "Guia interativo para procedimentos técnicos da régie.",
    "wipTitle": "Documento em work in progress",
    "wipText": "Este procedimento está em desenvolvimento e pode ser atualizado com novas instruções, fotos e validações técnicas.",
    "startButton": "Iniciar · Ligar a Régie",
    "viewProcedures": "Ver procedimentos",
    "suggestionsLink": "Sugestões",
    "proceduresEyebrow": "Procedimentos",
    "operationTitle": "Operação da Régie",
    "clearProgress": "Limpar progresso",
    "tagStartup": "Arranque",
    "cardPowerOnTitle": "Ligar a Régie",
    "cardPowerOnText": "Sequência completa de arranque dos MDU, mesas, câmaras, CCU, áudio e intercoms.",
    "tagLive": "Live",
    "cardStreamingTitle": "Streaming",
    "cardStreamingText": "Procedimento único para iniciar e encerrar a transmissão no PC das VT's.",
    "tagSupport": "Suporte",
    "cardProblemsTitle": "Problemas Comuns",
    "cardProblemsText": "Diagnóstico de imagem, áudio, sinal, intercoms e fontes.",
    "tagShutdown": "Encerramento",
    "cardPowerOffTitle": "Desligar a Régie",
    "cardPowerOffText": "Procedimento final, em ordem inversa ao arranque.",
    "backButton": "← Voltar",
    "activeProcedure": "Procedimento ativo",
    "progressSaved": "O progresso fica guardado neste dispositivo.",
    "finalValidation": "Validação final",
    "finalValidationText": "Quando todos os passos estiverem concluídos, o procedimento fica validado.",
    "markAllDone": "Marcar tudo como concluído",
    "contribute": "Contribuir",
    "suggestionsTitle": "Sugestões e correções",
    "suggestionsText": "Este documento encontra-se em desenvolvimento contínuo. Para sugerir melhorias ou reportar erros, contacte:",
    "stepDone": "Passo concluído",
    "mediaTitle": "Imagem / vídeo",
    "mediaPlaceholder": "Adicionar conteúdo depois",
    "progress": "concluído",
    "steps": "passos",
    "exampleKey": "Exemplo de Stream Key"
  },
  "en": {
    "brandSubtitle": "Cinema and Media Arts",
    "subtitle": "Interactive guide for control room technical procedures.",
    "wipTitle": "Work in progress document",
    "wipText": "This procedure is under development and may be updated with new instructions, photos and technical validations.",
    "startButton": "Start · Power On Control Room",
    "viewProcedures": "View procedures",
    "suggestionsLink": "Suggestions",
    "proceduresEyebrow": "Procedures",
    "operationTitle": "Control Room Operation",
    "clearProgress": "Clear progress",
    "tagStartup": "Startup",
    "cardPowerOnTitle": "Power On Control Room",
    "cardPowerOnText": "Complete startup sequence for MDUs, consoles, cameras, CCUs, audio and intercoms.",
    "tagLive": "Live",
    "cardStreamingTitle": "Streaming",
    "cardStreamingText": "Single procedure to start and end the broadcast from the VT PC.",
    "tagSupport": "Support",
    "cardProblemsTitle": "Common Issues",
    "cardProblemsText": "Diagnosis for image, audio, signal, intercoms and sources.",
    "tagShutdown": "Shutdown",
    "cardPowerOffTitle": "Power Off Control Room",
    "cardPowerOffText": "Final procedure, in reverse order of startup.",
    "backButton": "← Back",
    "activeProcedure": "Active procedure",
    "progressSaved": "Progress is saved on this device.",
    "finalValidation": "Final validation",
    "finalValidationText": "When all steps are complete, the procedure is validated.",
    "markAllDone": "Mark all as complete",
    "contribute": "Contribute",
    "suggestionsTitle": "Suggestions and corrections",
    "suggestionsText": "This document is under continuous development. To suggest improvements or report errors, contact:",
    "stepDone": "Step completed",
    "mediaTitle": "Image / video",
    "mediaPlaceholder": "Add content later",
    "progress": "complete",
    "steps": "steps",
    "exampleKey": "Example Stream Key"
  }
};

let currentLanguage = localStorage.getItem("regieon_language") || "pt";
let procedures = proceduresData[currentLanguage];
let activeProcedure = null;
let activeProcedureId = null;

function setLanguage(lang){
  currentLanguage = lang;
  localStorage.setItem("regieon_language", lang);
  procedures = proceduresData[currentLanguage];
  document.documentElement.lang = lang === "pt" ? "pt-PT" : "en";
  applyTranslations();
  updateMiniProgress();
  if(activeProcedureId){
    activeProcedure = procedures[activeProcedureId];
    document.getElementById("procedure-title").textContent = activeProcedure.title;
    renderSteps();
  }
}

function applyTranslations(){
  const t = ui[currentLanguage];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if(t[key]) el.textContent = t[key];
  });
  document.getElementById("lang-pt")?.classList.toggle("active", currentLanguage === "pt");
  document.getElementById("lang-en")?.classList.toggle("active", currentLanguage === "en");
}

function scrollToProcedures(){
  document.getElementById("procedures").scrollIntoView({behavior:"smooth"});
}

function openProcedure(id){
  activeProcedureId = id;
  activeProcedure = procedures[id];
  document.getElementById("home").classList.add("hidden");
  document.getElementById("procedures").classList.add("hidden");
  document.getElementById("sugestoes").classList.add("hidden");
  document.getElementById("procedure-view").classList.remove("hidden");
  document.getElementById("procedure-title").textContent = activeProcedure.title;
  renderSteps();
  window.scrollTo({top:0,behavior:"smooth"});
}

function closeProcedure(){
  document.getElementById("home").classList.remove("hidden");
  document.getElementById("procedures").classList.remove("hidden");
  document.getElementById("sugestoes").classList.remove("hidden");
  document.getElementById("procedure-view").classList.add("hidden");
  activeProcedure = null;
  activeProcedureId = null;
  updateMiniProgress();
  window.scrollTo({top:0,behavior:"smooth"});
}

function getSaved(){
  if(!activeProcedure)return[];
  return JSON.parse(localStorage.getItem(activeProcedure.storageKey)||"[]");
}

function saveState(){
  const checks=[...document.querySelectorAll(".step-check")].map(input=>input.checked);
  localStorage.setItem(activeProcedure.storageKey,JSON.stringify(checks));
  updateProgress();
}

function renderSteps(){
  const t = ui[currentLanguage];
  const saved=getSaved();
  const container=document.getElementById("steps");
  container.innerHTML="";
  activeProcedure.steps.forEach((step,index)=>{
    const card=document.createElement("article");
    card.className="step-card";
    const tasks=step.tasks.map(task=>{
      if(task.includes("3ec3-qhu3-bp5f-2dr1-11wj")){
        return `<li>${t.exampleKey}: <span class="key-example">3ec3-qhu3-bp5f-2dr1-11wj</span></li>`;
      }
      return `<li>${task}</li>`;
    }).join("");
    const note=step.warning?`<div class="warning">${step.warning}</div>`:step.note?`<p class="step-note">${step.note}</p>`:"";
    card.innerHTML=`<div>
      <div class="step-header">
        <div class="step-number">${index+1}</div>
        <div><h3 class="step-title">${step.title}</h3>${note}</div>
      </div>
      <ul>${tasks}</ul>
      <label class="check-row">
        <input class="step-check" type="checkbox" data-index="${index}" ${saved[index]?"checked":""}>
        ${t.stepDone}
      </label>
    </div>
    <div class="media-box">
      ${step.image
        ? `<img src="${step.image}" alt="${step.title}" class="step-image" onclick="openImage(this.src)">`
        : `<div><strong>${t.mediaTitle}</strong><span>${t.mediaPlaceholder}</span></div>`}
    </div>`;
    container.appendChild(card);
  });
  document.querySelectorAll(".step-check").forEach(input=>input.addEventListener("change",saveState));
  updateProgress();
}

function updateProgress(){
  if(!activeProcedure)return;
  const t = ui[currentLanguage];
  const checks=[...document.querySelectorAll(".step-check")];
  const done=checks.filter(input=>input.checked).length;
  const total=checks.length;
  const percent=total?Math.round((done/total)*100):0;
  checks.forEach(input=>input.closest(".step-card").classList.toggle("done",input.checked));
  document.getElementById("progress-text").textContent=`${percent}% ${t.progress} · ${done}/${total} ${t.steps}`;
  document.getElementById("progress-bar").style.width=`${percent}%`;
  updateMiniProgress();
}

function updateMiniProgress(){
  Object.entries(procedures).forEach(([id,proc])=>{
    const saved=JSON.parse(localStorage.getItem(proc.storageKey)||"[]");
    const done=saved.filter(Boolean).length;
    const percent=Math.round((done/proc.steps.length)*100);
    const mini=document.getElementById(`mini-${id}`);
    if(mini)mini.style.width=`${percent}%`;
  });
}

function markAllDone(){
  if(!activeProcedure)return;
  localStorage.setItem(activeProcedure.storageKey,JSON.stringify(activeProcedure.steps.map(()=>true)));
  renderSteps();
}

function resetAllProgress(){
  Object.values(proceduresData.pt).forEach(proc=>localStorage.removeItem(proc.storageKey));
  Object.values(proceduresData.en).forEach(proc=>localStorage.removeItem(proc.storageKey));
  updateMiniProgress();
  if(activeProcedure)renderSteps();
}

function openImage(src){
  document.getElementById("modalImage").src = src;
  document.getElementById("imageModal").classList.add("show");
}

function closeImage(){
  document.getElementById("imageModal").classList.remove("show");
}

document.addEventListener("keydown",(event)=>{
  if(event.key==="Escape") closeImage();
});

document.addEventListener("DOMContentLoaded",()=>{
  applyTranslations();
  updateMiniProgress();
  const modal=document.getElementById("imageModal");
  if(modal){
    modal.addEventListener("click",(e)=>{
      if(e.target.id==="imageModal") closeImage();
    });
  }
});
