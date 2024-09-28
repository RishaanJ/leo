export default function Home() {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="w-1/4 bg-gray-200 dark:bg-gray-800 p-5">
        <ul className="space-y-4">
          <li>
            <a className="cursor-pointer block p-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700">Patients</a>
          </li>
          <li>
            <a className="cursor-pointer block p-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700">Analytics</a>
          </li>
          <li>
            <a className="cursor-pointer block p-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700">Inventory</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-400">Patient</h3>
        <h1 className="text-4xl font-bold mt-2 mb-8">Lincoln Douglass</h1>
        <div className="quick-info grid grid-cols-2 gap-4">
          <div className="quick-info-item p-4 bg-gray-200 dark:bg-gray-800 rounded-lg">
            <h1 className="text-xl font-medium">Sex</h1>
            <h2 className="text-2xl font-semibold mt-2">M</h2>
          </div>
          <div className="quick-info-item p-4 bg-gray-200 dark:bg-gray-800 rounded-lg">
            <h1 className="text-xl font-medium">DOB</h1>
            <h2 className="text-2xl font-semibold mt-2">4/20/1969</h2>
          </div>
          <div className="quick-info-item p-4 bg-gray-200 dark:bg-gray-800 rounded-lg">
            <h1 className="text-xl font-medium">Medical ID</h1>
            <h2 className="text-2xl font-semibold mt-2">1123871283</h2>
          </div>
          <div className="quick-info-item p-4 bg-gray-200 dark:bg-gray-800 rounded-lg">
            <h1 className="text-xl font-medium">Room #</h1>
            <h2 className="text-2xl font-semibold mt-2">#263</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
