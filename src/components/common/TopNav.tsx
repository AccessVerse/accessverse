type Props = {
  page: string;
};

function TopNav({ page }: Props) {
  return (
    <div className="w-full h-[8vh] border-b border-gray-500 p-4 flex items-center justify-between">
      <span className="border border-gray-500 px-4 py-1 rounded-lg">
        {page}
      </span>

      <span>Connect Wallet / Wallet Details</span>
    </div>
  );
}

export default TopNav;
