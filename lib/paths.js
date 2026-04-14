// Utility function to get base path for links and assets
// This ensures proper paths for subdirectory deployment

export const getBasePath = () => {
  // For static export, we need to detect basePath from the URL
  if (typeof window !== 'undefined') {
    // Client-side: check if we're in a subdirectory
    const path = window.location.pathname;
    if (path.startsWith('/ppc-shield')) {
      return '/ppc-shield';
    }
  }
  
  // Server-side or initial render: return empty (will be set by useEffect in components)
  return '';
};

// Helper function to create proper paths for links
// This function should be called with a basePath parameter from component state
export const createPath = (path, basePath = '') => {
  // Remove leading slash from path if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Combine basePath with cleanPath
  if (basePath) {
    return `${basePath}/${cleanPath}`;
  }
  return `/${cleanPath}`;
};

// Helper function for asset paths (images, etc.)
// This function should be called with a basePath parameter from component state
export const getAssetPath = (assetPath, basePath = '') => {
  // Asset paths should start with /
  const cleanPath = assetPath.startsWith('/') ? assetPath : `/${assetPath}`;
  if (basePath) {
    return `${basePath}${cleanPath}`;
  }
  return cleanPath;
};

