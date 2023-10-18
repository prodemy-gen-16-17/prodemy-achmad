import { useSelector } from 'react-redux';

function SuccessOrder() {
  const orderSuccess = useSelector((state) => state.checkout.orderSuccess);

  return orderSuccess ? (
    <div className="bg-green-200 p-4 rounded-lg">
      <h2>Pesanan Berhasil Dikirim</h2>
      <p>Terima kasih telah melakukan pesanan. Detail pesanan Anda akan dikirimkan segera.</p>
    </div>
  ) : null;
}
