const getInitialData = () => ([
  {
    id: 1,
    title: "Fitur Notif Android",
    body: "Pembuatan fitur notif belum selesai. Rencana terdapat notifikasi pada aplikasi terbaru.",
    imageUrl: '/images/note1.jpg',
    createdAt: '2022-04-11T04:27:34.572Z',
    archived: false,
  },
  {
    id: 2,
    title: "40 Icon Berbeda",
    body: "Icon adalah tampilan suatu gamabr yang merepresentasikan fungsi dari objek itu sendiri. Icon dibuat untuk mempermudah pengguna dalam mengakses objek tertentu. Hal ini disebabkan karena adanya bantuan visual.",
    imageUrl: '/images/note2.jpg',
    createdAt: '2022-04-15T04:27:34.572Z',
    archived: false,
  },
  {
    id: 3,
    title: "Surat Kesehatan",
    body: "Surat kesehatan yang berguna sebagai perlengkapan untuk dinas keluar kota karena angka covid yang meningkat maka diperlukan. Jangan lupa minta ttd kepala staff ",
    imageUrl: '/images/note3.jpg',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
  },
  {
    id: 4,
    title: "Flow Kerja Bulan Mei",
    body: "Flow kerja atau rancangan kerja selama 1 bulan Mei agar dapat mengejar deadline pembuatan aplikasi Tim 3",
    imageUrl: '/images/note4.jpg',
    createdAt: '2022-05-14T04:27:34.572Z',
    archived: false,
  },
  {
    id: 5,
    title: "Hasil rapat 24 Agustus",
    body: "Catatan Hasil Rapat dengan Tim 1 dan Tim 2. Ada beberapa agenda yang eprlu diubah dan penambahan keperluan alat dan bahan untuk pembuatan cover aplikasi terbaru",
    imageUrl: '/images/note5.jpg',
    createdAt: '2022-08-24T04:27:34.572Z',
    archived: false,
  },
  {
    id: 6,
    title: "Cover Pedoman Aplikasi",
    body: "Judul dan deskripsi untuk cover pedoman aplikasi yang akan rencana dibuat segera. Jangan lupa konsultasi dengan Tim Creative terkait warna dan font pada cover",
    imageUrl: '/images/note6.jpg',
    createdAt: '2022-08-28T04:27:34.572Z',
    archived: false,
  },
]);

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }
  return new Date(date).toLocaleDateString("id-ID", options)
}

export { getInitialData, showFormattedDate };
