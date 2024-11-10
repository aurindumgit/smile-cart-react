const PageNotFound = () => (
    <div className="absolute left-1/3 top-1/3 text-center">
      <h1 className="text-2xl font-semibold mb-4">The page you're looking for can't be found</h1>
      <a
        href="/"
        className="bg-neutral-800 hover:bg-neutral-950 text-white py-2 px-4 rounded"
      >
        Back to home    
      </a>
    </div>
  );
  
  export default PageNotFound;
  