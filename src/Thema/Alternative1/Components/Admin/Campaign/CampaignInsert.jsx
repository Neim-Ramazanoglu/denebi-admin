import React, { useState } from 'react'
import { Calendar } from '@hassanmojab/react-modern-calendar-datepicker';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';


function CampaignInsert() {
    const [state, setState] = useState(0)
    const [selectedDayRange, setSelectedDayRange] = useState({
        from: null,
        to: null
    });

    const List = [
        {
            photo: 'https://picsum.photos/id/15/200',
            name: 'Ürün Adı',
            detail: 'Ürün Açıklaması',
        },
        {
            photo: 'https://picsum.photos/id/16/200',
            name: 'Ürün Adı',
            detail: 'Ürün Açıklaması',
        },
        {
            photo: 'https://picsum.photos/id/17/200',
            name: 'Ürün Adı',
            detail: 'Ürün Açıklaması',
        },
        {
            photo: 'https://picsum.photos/id/18/200',
            name: 'Ürün Adı',
            detail: 'Ürün Açıklaması',
        },
        {
            photo: 'https://picsum.photos/id/25/200',
            name: 'Ürün Adı',
            detail: 'Ürün Açıklaması',
        },
        {
            photo: 'https://picsum.photos/id/18/200',
            name: 'Ürün Adı',
            detail: 'Ürün Açıklaması',
        },
        {
            photo: 'https://picsum.photos/id/25/200',
            name: 'Ürün Adı',
            detail: 'Ürün Açıklaması',
        },
    ]

    const List1 = [
        {
            photo: 'https://picsum.photos/id/15/200',
            name: 'İşletme Adı',
            detail: 'İşletme Bilgisi',
        },
        {
            photo: 'https://picsum.photos/id/16/200',
            name: 'İşletme Adı',
            detail: 'İşletme Bilgisi',
        },
        {
            photo: 'https://picsum.photos/id/17/200',
            name: 'İşletme Adı',
            detail: 'İşletme Bilgisi',
        },
        {
            photo: 'https://picsum.photos/id/18/200',
            name: 'İşletme Adı',
            detail: 'İşletme Bilgisi',
        },
        {
            photo: 'https://picsum.photos/id/25/200',
            name: 'İşletme Adı',
            detail: 'İşletme Bilgisi',
        },
        {
            photo: 'https://picsum.photos/id/18/200',
            name: 'İşletme Adı',
            detail: 'İşletme Bilgisi',
        },
        {
            photo: 'https://picsum.photos/id/25/200',
            name: 'İşletme Adı',
            detail: 'İşletme Bilgisi',
        },
    ]
    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">Kampanya Oluştur</h1>
            </div>
            <div className="card">
                <div className="card-body">
                    <div className="panel panel-primary">
                        <div className=" tab-menu-heading">
                            <div className="tabs-menu1">
                                <ul className="nav panel-tabs">
                                    <li>
                                        <a href="#tab5" className="active" data-bs-toggle="tab">
                                            Kampanya Bilgileri
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#tab6" data-bs-toggle="tab">
                                            Kampanya Türü
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#tab7" data-bs-toggle="tab">
                                            İlişkili Ürün
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#tab8" data-bs-toggle="tab">
                                            Sipariş Özeti
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="panel-body tabs-menu-body">
                            <div className="tab-content">
                                <div className="tab-pane active" id="tab5">
                                    <div className="row">
                                        <div className="col-5">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="wideget-user mb-2">
                                                        <div className="row">
                                                            <div className="col-lg-12 col-md-12">
                                                                <div className="row" style={{ width: '400px' }}>
                                                                    <div className="panel profile-cover">
                                                                        <div className="profile-cover__action bg-img" />
                                                                        <div className="profile-cover__img">
                                                                            <div className="profile-img-2">
                                                                                <img src={require("../../../Assets/png/avatar1.png")} alt="img" />
                                                                            </div>
                                                                            <div className="profile-img-content text-dark text-start">
                                                                                <select
                                                                                    name="country"
                                                                                    className=" form-select"
                                                                                    data-bs-placeholder="Select Country"
                                                                                >
                                                                                    <option value="" disabled selected hidden>İşletme Seçiniz</option>
                                                                                    <option value="br">İşletme 1</option>
                                                                                    <option value="cz">İşletme 2</option>
                                                                                    <option value="de">İşletme 3</option>
                                                                                    <option value="pl">İşletme 4</option>
                                                                                </select>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-7">
                                            <div className="col">
                                                <div className="mb-10">
                                                    <label className="form-label mb-3">Kampanya Başlığı</label>
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-lg "
                                                        name="campaign_name"
                                                        placeholder="Kampanya Başlığı Giriniz .."
                                                        defaultValue=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="mb-10 ">
                                                    <label className="form-label mb-3">Dil</label>
                                                    <select className="form-control form-control-lg " style={{ backgroundColor: '#fff' }}>
                                                        <option value="tr">Türkçe</option>
                                                        <option value="de">German</option>
                                                        <option value="en">English</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="mb-10 ">
                                                    <label className="form-label mb-3">Kategori</label>
                                                    <div className='checkbox-div' style={{ overflowX: 'scroll', whiteSpace: 'nowrap' }}>
                                                        <label class="checkbox-container">
                                                            <input type="checkbox" name="checkbox" />
                                                            <span class="checkmark">kategori</span>
                                                        </label>
                                                        <label class="checkbox-container">
                                                            <input type="checkbox" name="checkbox" />
                                                            <span class="checkmark">kategori</span>
                                                        </label>
                                                        <label class="checkbox-container">
                                                            <input type="checkbox" name="checkbox" />
                                                            <span class="checkmark">kategori</span>
                                                        </label>
                                                        <label class="checkbox-container">
                                                            <input type="checkbox" name="checkbox" />
                                                            <span class="checkmark">kategori</span>
                                                        </label>
                                                        <label class="checkbox-container">
                                                            <input type="checkbox" name="checkbox" />
                                                            <span class="checkmark">kategori</span>
                                                        </label>
                                                        <label class="checkbox-container">
                                                            <input type="checkbox" name="checkbox" />
                                                            <span class="checkmark">kategori</span>
                                                        </label>
                                                        <label class="checkbox-container">
                                                            <input type="checkbox" name="checkbox" />
                                                            <span class="checkmark">kategori</span>
                                                        </label>
                                                        <label class="checkbox-container">
                                                            <input type="checkbox" name="checkbox" />
                                                            <span class="checkmark">kategori</span>
                                                        </label>
                                                        <label class="checkbox-container">
                                                            <input type="checkbox" name="checkbox" />
                                                            <span class="checkmark">kategori</span>
                                                        </label>
                                                        <label class="checkbox-container">
                                                            <input type="checkbox" name="checkbox" />
                                                            <span class="checkmark">kategori</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tab6">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="row">
                                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <div style={{ borderLeft: '3px solid var(--green)', borderRadius: '10px', height: '40px', position: 'absolute' }} />

                                                    <div style={{ marginLeft: '15px' }}>
                                                        <div style={{ fontWeight: 'bold' }}>
                                                            Fiş Kabul
                                                        </div>
                                                        <div style={{ fontSize: '12px' }}>
                                                            Kampanyaya katılım için fiş zorunludur.
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label className="custom-control custom-checkbox-md">
                                                            <input
                                                                type="checkbox"
                                                                className="custom-control-input"
                                                                name="example-checkbox5"
                                                                defaultValue="option5"
                                                                defaultChecked=""
                                                            />
                                                            <span className="custom-control-label"></span>
                                                        </label>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mt-5">
                                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <div style={{ borderLeft: '3px solid red', borderRadius: '10px', height: '40px', position: 'absolute' }} />
                                                    <div style={{ marginLeft: '15px' }}>
                                                        <div style={{ fontWeight: 'bold' }}>
                                                            Çekiliş
                                                        </div>
                                                        <div style={{ fontSize: '12px' }}>

                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label className="custom-control custom-checkbox-md">
                                                            <input
                                                                type="checkbox"
                                                                className="custom-control-input"
                                                                name="example-checkbox5"
                                                                defaultValue="option5"
                                                                defaultChecked=""
                                                            />
                                                            <span className="custom-control-label"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mt-5">
                                                <label className="form-label mb-3">Kampanya Başlığı</label>
                                                <div style={{ width: '250px' }} >
                                                    <div className='d-flex justify-content-between' style={{ border: '1px solid #808080', padding: '3px', borderRadius: '10px' }}>
                                                        <div style={{ marginLeft: '4px', paddingRight: '4px', borderRight: '1px solid black' }}>
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                            >
                                                                <rect
                                                                    opacity="0.3"
                                                                    x={2}
                                                                    y={2}
                                                                    width={20}
                                                                    height={20}
                                                                    rx={10}
                                                                    fill="#6c5ffc"
                                                                />
                                                                <rect
                                                                    x="6.01041"
                                                                    y="10.9247"
                                                                    width={12}
                                                                    height={2}
                                                                    rx={1}
                                                                    fill="#6c5ffc"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <input defaultValue={50} style={{ width: '60%', border: 'none' }} />
                                                        <div style={{ marginRight: '4px', paddingLeft: '4px', borderLeft: '1px solid #808080' }}>
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                            >
                                                                <rect
                                                                    opacity="0.3"
                                                                    x={2}
                                                                    y={2}
                                                                    width={20}
                                                                    height={20}
                                                                    rx={10}
                                                                    fill="#6c5ffc"
                                                                />
                                                                <rect
                                                                    x="10.8891"
                                                                    y="17.8033"
                                                                    width={12}
                                                                    height={2}
                                                                    rx={1}
                                                                    transform="rotate(-90 10.8891 17.8033)"
                                                                    fill="#6c5ffc"
                                                                />
                                                                <rect
                                                                    x="6.01041"
                                                                    y="10.9247"
                                                                    width={12}
                                                                    height={2}
                                                                    rx={1}
                                                                    fill="#6c5ffc"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mt-5">
                                                <label className="form-label mb-3">Satın alınacak denebi puanı</label>
                                                <div style={{ width: '250px' }} >
                                                    <div className='d-flex justify-content-between' style={{ border: '1px solid #808080', padding: '3px', borderRadius: '10px' }}>
                                                        <div style={{ marginLeft: '4px', paddingRight: '4px', borderRight: '1px solid black' }}>
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                            >
                                                                <rect
                                                                    opacity="0.3"
                                                                    x={2}
                                                                    y={2}
                                                                    width={20}
                                                                    height={20}
                                                                    rx={10}
                                                                    fill="#6c5ffc"
                                                                />
                                                                <rect
                                                                    x="6.01041"
                                                                    y="10.9247"
                                                                    width={12}
                                                                    height={2}
                                                                    rx={1}
                                                                    fill="#6c5ffc"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <input defaultValue={50} style={{ width: '60%', border: 'none' }} />
                                                        <div style={{ marginRight: '4px', paddingLeft: '4px', borderLeft: '1px solid #808080' }}>
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                            >
                                                                <rect
                                                                    opacity="0.3"
                                                                    x={2}
                                                                    y={2}
                                                                    width={20}
                                                                    height={20}
                                                                    rx={10}
                                                                    fill="#6c5ffc"
                                                                />
                                                                <rect
                                                                    x="10.8891"
                                                                    y="17.8033"
                                                                    width={12}
                                                                    height={2}
                                                                    rx={1}
                                                                    transform="rotate(-90 10.8891 17.8033)"
                                                                    fill="#6c5ffc"
                                                                />
                                                                <rect
                                                                    x="6.01041"
                                                                    y="10.9247"
                                                                    width={12}
                                                                    height={2}
                                                                    rx={1}
                                                                    fill="#6c5ffc"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mt-5">
                                                <label className="form-label mb-3">1 Kullanıcıya verilecek olan ortalama denebi puanı</label>
                                                <div style={{ width: '250px' }} >
                                                    <div className='d-flex justify-content-between' style={{ border: '1px solid #808080', padding: '3px', borderRadius: '10px' }}>
                                                        <div style={{ marginLeft: '4px', paddingRight: '4px', borderRight: '1px solid black' }}>
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                            >
                                                                <rect
                                                                    opacity="0.3"
                                                                    x={2}
                                                                    y={2}
                                                                    width={20}
                                                                    height={20}
                                                                    rx={10}
                                                                    fill="#6c5ffc"
                                                                />
                                                                <rect
                                                                    x="6.01041"
                                                                    y="10.9247"
                                                                    width={12}
                                                                    height={2}
                                                                    rx={1}
                                                                    fill="#6c5ffc"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <input defaultValue={50} style={{ width: '60%', border: 'none' }} />
                                                        <div style={{ marginRight: '4px', paddingLeft: '4px', borderLeft: '1px solid #808080' }}>
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                            >
                                                                <rect
                                                                    opacity="0.3"
                                                                    x={2}
                                                                    y={2}
                                                                    width={20}
                                                                    height={20}
                                                                    rx={10}
                                                                    fill="#6c5ffc"
                                                                />
                                                                <rect
                                                                    x="10.8891"
                                                                    y="17.8033"
                                                                    width={12}
                                                                    height={2}
                                                                    rx={1}
                                                                    transform="rotate(-90 10.8891 17.8033)"
                                                                    fill="#6c5ffc"
                                                                />
                                                                <rect
                                                                    x="6.01041"
                                                                    y="10.9247"
                                                                    width={12}
                                                                    height={2}
                                                                    rx={1}
                                                                    fill="#6c5ffc"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <label className="font-size-h6 font-weight-bolder text-dark mb-2">Başlangıç ve Bitiş Tarihi</label>
                                            <Calendar
                                                value={selectedDayRange}
                                                onChange={setSelectedDayRange}
                                                shouldHighlightWeekends
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tab7">
                                    <div className="row">
                                        <div className="col-6">
                                            <label className="form-label mb-3"> İlişkili Ürünler</label>
                                            <div className="e-table px-5 pb-5" style={{ border: '1px dashed black', borderRadius: '10px', overflow: 'scroll', whiteSpace: 'nowrap', height: '350px' }}>
                                                <div className="table-responsive table-lg">
                                                    <table className="table mb-0">
                                                        <tbody>
                                                            {
                                                                List?.map((item, index) => {
                                                                    return (
                                                                        <tr>
                                                                            <td className="align-middle text-center">
                                                                                <img
                                                                                    alt="image"
                                                                                    className="avatar avatar-md br-7"
                                                                                    src={item.photo}
                                                                                />
                                                                            </td>
                                                                            <td className="text-nowrap align-middle" style={{ display: 'block' }}>
                                                                                <div className='fw-bold'>{item.name} </div>
                                                                                <div className='text-muted'>{item.detail} </div>
                                                                            </td>
                                                                            <td className="align-middle text-center">
                                                                                <label className="custom-control custom-checkbox-md">
                                                                                    <input
                                                                                        type="checkbox"
                                                                                        className="custom-control-input"
                                                                                        name="example-checkbox5"
                                                                                        defaultValue="option5"
                                                                                        defaultChecked=""
                                                                                    />
                                                                                    <span className="custom-control-label"></span>
                                                                                </label>
                                                                            </td>
                                                                        </tr>
                                                                    )
                                                                })
                                                            }
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <label className="form-label mb-3"> İlişkili İşletmeler</label>
                                            <div className="e-table px-5 pb-5" style={{ border: '1px dashed black', borderRadius: '10px', overflow: 'scroll', whiteSpace: 'nowrap', height: '350px' }}>
                                                <div className="table-responsive table-lg">
                                                    <table className="table mb-0">
                                                        <tbody>
                                                            {
                                                                List1?.map((item, index) => {
                                                                    return (
                                                                        <tr>
                                                                            <td className="align-middle text-center">
                                                                                <img
                                                                                    alt="image"
                                                                                    className="avatar avatar-md br-7"
                                                                                    src={item.photo}
                                                                                />
                                                                            </td>
                                                                            <td className="text-nowrap align-middle" style={{ display: 'block' }}>
                                                                                <div className='fw-bold'>{item.name} </div>
                                                                                <div className='text-muted'>{item.detail} </div>
                                                                            </td>
                                                                            <td className="align-middle text-center">
                                                                                <label className="custom-control custom-checkbox-md">
                                                                                    <input
                                                                                        type="checkbox"
                                                                                        className="custom-control-input"
                                                                                        name="example-checkbox5"
                                                                                        defaultValue="option5"
                                                                                        defaultChecked=""
                                                                                    />
                                                                                    <span className="custom-control-label"></span>
                                                                                </label>
                                                                            </td>
                                                                        </tr>
                                                                    )
                                                                })
                                                            }
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tab8">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default CampaignInsert