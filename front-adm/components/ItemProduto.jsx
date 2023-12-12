import Swal from 'sweetalert2';
import { HiTrash } from 'react-icons/hi';

export default function ItemProduto(props) {
  function confirmaExclusao(id) {
    // if (confirm(`Confirma Exclusão do Filme "${titulo}"?`)) {
    //   props.exclui(id)
    // }
    Swal.fire({
      title: `Confirma Exclusão do Produto?`,
      text: 'Esta operação não poderá ser desfeita',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim. Excluir!',
    }).then((result) => {
      if (result.isConfirmed) {
        props.exclui(id);
        Swal.fire('Excluído!', 'Produto excluído com sucesso', 'success');
      }
    });
  }
  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {props.produto.nome}
      </th>
      <td className="px-6 py-4">{props.produto.descricao}</td>
      <td className="px-6 py-4">{props.produto.preco}</td>
      <td className="px-6 py-4">{props.produto.imagem}</td>
      <td className="px-6 py-4">
        <i
          className="cursor-pointer"
          onClick={() => confirmaExclusao(props.produto.id)}
        >
          <HiTrash />
        </i>
      </td>
    </tr>
  );
}
