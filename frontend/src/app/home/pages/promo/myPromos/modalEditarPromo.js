import { useState } from 'react';
import editarPromo from '../../../services/promo/editarPromo.js';
import Button from '../../Compartilhado/button.js';

const ModalEditarPromo = ({ promo, onClose, onUpdate }) => {
  const [promoName, setPromoName] = useState(promo.promoName);
  const [id, setId] = useState(promo.promoId);
  const [desconto, setDesconto] = useState(promo.desconto);
  const [data_inicio, setData_inicio] = useState(promo.data_inicio);
  const [data_fim, setData_fim] = useState(promo.data_fim);
  const [errorMessage, setErrorMessage] = useState('');

  const handleEditPromo = async (e) => {
    e.preventDefault();
    const data = {
      promoName,
      id,
      desconto,
      data_inicio,
      data_fim
    };
    try {
      await editarPromo(promo.promoId, data);
      alert('Promoção editada com sucesso!');
      onUpdate(data);
      onClose();
    } catch (error) {
      setErrorMessage(error.response?.data?.error || 'Erro ao editar promoção');
    }
  };

  return (
    <div>
      <h1>Editar Promoção</h1>
      <br />
      <form onSubmit={handleEditPromo}>
        <label>
          ID do Hotel:
          <input type='number' name='id' value={id} onChange={(e) => setId(e.target.value)} required />
        </label>
        <br />
        <label>
          Desconto:
          <input type='number' name='desconto' value={desconto} onChange={(e) => setDesconto(e.target.value)} required />
        </label>
        <br />
        <label>
          Nome da Promoção:
          <input type='text' name='promoName' value={promoName} onChange={(e) => setPromoName(e.target.value)} required />
        </label>
        <br />
        <label>
          Data de Início:
          <input type='date' name='data_inicio' value={data_inicio} onChange={(e) => setData_inicio(e.target.value)} required />
        </label>
        <br />
        <label>
          Data de Fim:
          <input type='date' name='data_fim' value={data_fim} onChange={(e) => setData_fim(e.target.value)} required />
        </label>
        <br />
        <br />
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <br />

        <Button nome='Salvar Edição' type='submit' />
      </form>
    </div>
  );
};

export default ModalEditarPromo;