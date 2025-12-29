function TombolCounter() {
    const [jumlah, setJumlah] = React.useState(0);
    const [like, setLike] = React.useState(0);

    return (
        <div className="container mt-4">
            <h3>Tombol Counter</h3>
            <h5>Jumlah: {jumlah}</h5>
            <button className="btn btn-primary me-2" onClick={() => setJumlah(jumlah + 1)}>Tambah</button>
            <button className="btn btn-secondary" onClick={() => setJumlah(jumlah - 1)}>Kurang</button>
            <button className="btn btn-dark mt-4 d-block" onClick={() => setLike(like + 1)}>Like ❤️ {like}</button>
        </div>
    )
}