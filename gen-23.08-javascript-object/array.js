// Membuat array of object
const data = [
    {
      nama: "John",
      usia: 30,
      kota: "New York"
    },
    {
      nama: "Alice",
      usia: 25,
      kota: "Los Angeles"
    },
    {
      nama: "Bob",
      usia: 35,
      kota: "Chicago"
    },
    {
      nama: "Eva",
      usia: 28,
      kota: "Los Angeles"
    }
  ];
  
  // Menggunakan metode filter untuk mencari objek dengan properti tertentu
  const hasilFilter = data.filter(item => item.nama === "Bob");
  
  // Menampilkan semua properti satu per satu di console
  console.log("Hasil Filter (Semua Properti):");
  hasilFilter.forEach(item => {
    console.log("Nama:", item.nama);
    console.log("Usia:", item.usia);
    console.log("Kota:", item.kota);
    console.log("--------------------");
  });
  