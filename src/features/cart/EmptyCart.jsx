import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center absolute inset-0 px-4 gap-4 text-center">
      <p className="mt-7 font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
    </div>
  );
}

export default EmptyCart;
