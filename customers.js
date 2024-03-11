function showProductDetails(detailsId) {
  // Hide all product details
  const allDetails = document.querySelectorAll('.customer-details');
  for (const details of allDetails) {
    details.style.display = 'none';
  }

  // Show the selected product's details
  const selectedDetails = document.getElementById(detailsId);
  if (selectedDetails) {
    selectedDetails.style.display = 'block';
  } else {
    console.error("Details container not found for ID:", detailsId);
  }
}