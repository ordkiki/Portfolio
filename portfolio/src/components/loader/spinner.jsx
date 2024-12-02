    {/*

    */}
function Loading() {
  return (
    <div className="flex justify-center items-center w-screen h-screen fixed bg-gray-900 top-0 left-0 z-99">
        <div>
            <div className="shadow-sm shadow-green-500 cercle w-[20vw] h-[20vw] rounded-full animate-spin border-t-green-400 border-[10px] border-solid">
            </div>
            <p className="fixed top-[49%] left-[48%] text-center animate-ping">Loading...</p>
        </div>
    </div>
  )
}

export default Loading