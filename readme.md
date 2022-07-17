# Pengertian MCR

#### Model Controller Route atau yang dapat disingkat MCR adalah sebuah pola arsitektur dalam membuat sebuah aplikasi dengan cara memisahkan kode menjadi tiga bagian yang terdiri dari:

## Model 
#### Bagian yang bertugas untuk menyiapkan, mengatur, memanipulasi, dan mengorganisasikan data yang ada di database.
## Controller  
#### Bagian yang bertugas untuk menghubungkan serta mengatur model dan route agar dapat saling terhubung.
## Route  
#### Bagian yang berisi end point pada API yang sudah kita buat. Route sebagai pemnghubung ke beberapa controller dengan endpoint untuk berinteraksi dengan pengguna. Route menerima beberapa input pengguna  dan menerima beberapa hasil dari controller

# Alasan menggunakan MCR

## Penulisan kode menjadi lebih rapi
#### Karena dibagi menjadi tiga bagian, maka penulisan kode akan jadi lebih rapi dan memudahkan developer lain untuk mengembangkan kode tersebut.

## Dapat melakukan testing dengan lebih mudah
#### Untuk memastikan seluruh aplikasi bekerja sesuai dengan rencana maka langkah testing atau uji coba wajib dilakukan. Dengan menggunakan MCR ini, maka proses uji coba dapat dilakukan pada setiap bagian.

## Perbaikan bug atau error lebih cepat untuk diselesaikan
#### Penggunaan MCR dapat memudahkan developer untuk memperbaiki error atau bug yang terjadi. Developer dapat fokus untuk menemukan dan memperbaiki masalah yang terjadi karena kode dituliskan pada bagian-bagian terpisah.

## Mempermudah pemeliharaan
#### Konsep MCR ini dapat mempermudah pemeliharaan aplikasi, karena script atau kode yang lebih rapi dan terstruktur sehingga mempermudah developer dalam proses pemeliharaan aplikasi.

