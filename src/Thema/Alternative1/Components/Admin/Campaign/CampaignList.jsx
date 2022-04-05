import React from 'react'

function CampaignList() {

    const list = [
        {
            id: 1,
            işletme: 'İşletme 1',
            img: 'https://picsum.photos/200/300',
            end_date: '2020-01-01',
            status: 'Onaylandı',
            total_point: '100',
            participation: '10',
        },
        {
            id: 2,
            işletme: 'İşletme 2',
            img: 'https://picsum.photos/150/150',
            end_date: '2020-01-01',
            status: 'Onaylanmadı',
            total_point: '1200',
            participation: '90',

        },
        {
            id: 3,
            işletme: 'İşletme 3',
            img: 'https://picsum.photos/id/12/200/300',
            end_date: '2020-01-01',
            status: 'Onay bekliyor',
            total_point: '1200',
            participation: '50',

        }
    ]

    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">Home</h1>
            </div>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xl-12">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xl-3">
                            <div className="card overflow-hidden">
                                <div className="card-body">
                                    <div className="d-flex">
                                        <div className="mt-2">
                                            <h6 className="">Toplam Kampanya</h6>
                                            <h2 className="mb-0 number-font">44,278</h2>
                                        </div>
                                        <div className="ms-auto">
                                            <i className="fa fa-user icon-size float-start text-success text-success-shadow border-success brround p-3" />
                                        </div>
                                    </div>
                                    <span className="text-muted fs-12">
                                        <span className="text-secondary">
                                            <i className="fe fe-arrow-up-circle  text-secondary" /> 5%
                                        </span>
                                        Son 7 Gün
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xl-3">
                            <div className="card overflow-hidden">
                                <div className="card-body">
                                    <div className="d-flex">
                                        <div className="mt-2">
                                            <h6 className="">Yeni Kampanya</h6>
                                            <h2 className="mb-0 number-font">67,987</h2>
                                        </div>
                                        <div className="ms-auto">
                                            <i className="fa fa-user-plus icon-size float-start text-orange text-orange-shadow border-orange brround p-3" />

                                        </div>
                                    </div>
                                    <span className="text-muted fs-12">
                                        <span className="text-pink">
                                            <i className="fe fe-arrow-down-circle text-pink" /> 0.75%
                                        </span>
                                        Son 7 Gün
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xl-3">
                            <div className="card overflow-hidden">
                                <div className="card-body">
                                    <div className="d-flex">
                                        <div className="mt-2">
                                            <h6 className="">Aktif Kampanya</h6>
                                            <h2 className="mb-0 number-font">$76,965</h2>
                                        </div>
                                        <div className="ms-auto">
                                            <i className="fa fa-pie-chart icon-size float-start text-pink text-pink-shadow border-pink brround p-3" />

                                        </div>
                                    </div>
                                    <span className="text-muted fs-12">
                                        <span className="text-green">
                                            <i className="fe fe-arrow-up-circle text-green" /> 0.9%
                                        </span>
                                        Son 7 Gün
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xl-3">
                            <div className="card overflow-hidden">
                                <div className="card-body">
                                    <div className="d-flex">
                                        <div className="mt-2">
                                            <h6 className="">Onay Bekleyen Kampanya</h6>
                                            <h2 className="mb-0 number-font">$59,765</h2>
                                        </div>
                                        <div className="ms-auto">
                                            <i className="fa fa-ticket icon-size float-start text-danger text-danger-shadow border-danger brround p-3" />
                                        </div>
                                    </div>
                                    <span className="text-muted fs-12">
                                        <span className="text-warning">
                                            <i className="fe fe-arrow-up-circle text-warning" /> 0.6%
                                        </span>
                                        Son 7 Gün
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row row-sm">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-12 col-md-6">
                                    <div id="data-table_filter" className="dataTables_filter">
                                        <label>
                                            <input
                                                id='driversSearchbar'
                                                name="search"
                                                type="search"
                                                className="form-control"
                                                placeholder="Search..."
                                                aria-controls="data-table"
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <div className='text-end'>
                                        <button type="button" className="btn mb-5" style={{ border: '1px solid #6c5ffc', color: '#6c5ffc', boxShadow: '0px 5px 5px 0px rgba(0,0,0,0.07)' }}>
                                            Kampanya Oluştur
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="table-responsive">
                                {
                                    list?.length ? <table className="table border text-nowrap text-md-nowrap table-striped mb-0">
                                        <thead >
                                            <tr>
                                                <th>İşletme Bilgisi</th>
                                                <th>Bitiş Süresi</th>
                                                <th>Durum</th>
                                                <th>Toplam Puan</th>
                                                <th>Gelen fişler</th>
                                                <th>katılım oranı</th>
                                            </tr>
                                        </thead>
                                        <tbody >
                                            {
                                                list?.length ? list?.map((item, i) => {
                                                    return <tr key={i}  >
                                                        <td>
                                                            <div>
                                                                <img src={item.img} className="cart-img text-center" />
                                                                <span className='ms-3'>{item.işletme}</span>
                                                            </div>
                                                        </td>
                                                        <td className="align-middle">
                                                            {item.end_date}
                                                        </td>
                                                        <td className="align-middle">
                                                            <div style={{ display: 'flex' }}>
                                                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', marginRight: '5px', marginTop: '5px', backgroundColor: item.status == 'Onaylandı' ? 'green' : item.status == 'Onaylanmadı' ? 'red' : 'blue' }} />
                                                                {item.status}
                                                            </div>
                                                        </td>
                                                        <td className="align-middle">
                                                            {item.total_point}
                                                        </td>
                                                        <td className="align-middle">
                                                            <div className="avatar-list avatar-list-stacked">
                                                                <img
                                                                    className="avatar brround"
                                                                    src='https://picsum.photos/id/18/150/150'
                                                                />
                                                                <img
                                                                    className="avatar brround"
                                                                    src='https://picsum.photos/id/28/150/150'
                                                                />
                                                                <img
                                                                    className="avatar brround"
                                                                    src='https://picsum.photos/id/30/150/150'
                                                                />
                                                                <span className="avatar brround" style={{ color: 'black', backgroundColor: 'wheat' }}>+28</span>
                                                            </div>
                                                        </td>
                                                        <td className="align-middle">
                                                            <div >%{item.participation} </div>
                                                            <div className="progress progress-sm mt-3" style={{ backgroundColor: '#DEDEDE' }}>
                                                                <div className="progress-bar" style={{ width: item.participation + '%', backgroundColor: item.participation < '40' ? 'red' : item.participation < '70' ? 'orange' : '#1bd17d' }} />
                                                            </div>

                                                        </td>
                                                        <td>
                                                            <div className="d-flex">
                                                                <div className="mt-0 mt-sm-3">
                                                                    <button className="btn btn-sm btn-light-danger btn-icon mr-2" title="Delete">
                                                                        <span className="svg-icon svg-icon-md">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                                                    <rect x={0} y={0} width={24} height={24} />
                                                                                    <path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fillRule="nonzero" />
                                                                                    <path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3" />
                                                                                </g>
                                                                            </svg>
                                                                        </span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                }) : ""
                                            }
                                        </tbody>
                                    </table>
                                        :
                                        <div style={{ backgroundColor: 'white', borderRadius: '25px', padding: '20px' }}>
                                            <h4 style={{ justifyContent: "center", display: "flex" }}>Listelenecek birşey bulamadık</h4>
                                            <div style={{ justifyContent: "center", display: "flex" }}>
                                                <img src={require("../../../Assets/images/pngs/no-data.png")} style={{ width: "40%" }} />
                                            </div>
                                        </div>
                                }

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CampaignList