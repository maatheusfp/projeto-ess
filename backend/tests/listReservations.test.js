import { defineFeature, loadFeature } from  'jest-cucumber';
import supertest from 'supertest';
import app from '../..';
import fs from 'fs';
import path from 'path'

const feature = loadFeature('./tests/features/listarReservasAcomodacao.feature');
const request = supertest(app);

defineFeature(feature, test => {
  let response;
  let userId;

  test('Ver lista de reservas confirmadas na acomodação via GUI', ({ given, when, then }) => {
    given(/^que estou logado no sistema com ID de usuário "(.*)"$/, async (arg0) => {
    userId = arg0;
    });

    given('eu estou na página "Minhas Acomodações"', async () => {
      // Simular o acesso à página "Minhas Acomodações"
    });

    when(/^eu clico no botão "Listar Reservas" para a acomodação com ID "(.*)"$/, async (acomodacaoId) => {
      response = await request.get(`http://localhost:5000/host/accommodations/${acomodacaoId}/reservations`);
    });

    then(/^eu devo ver uma lista de reservas confirmadas para a acomodação com ID "(.*)"$/, (acomodacaoId) => {
      expect(response.status).toBe(200);
      expect(response.data).toBeInstanceOf(Array);
      response.data.forEach(reserva => {
        expect(reserva.acomodacaoId).toBe(acomodacaoId);
      });
    });

    then('cada reserva deve exibir os seguintes detalhes:', (detailsTable) => {
      const expectedDetails = detailsTable.rawTable.flat();
      response.data.forEach(reserva => {
        expectedDetails.forEach(detail => {
          expect(reserva).toHaveProperty(detail);
        });
      });
    });
  });
});
