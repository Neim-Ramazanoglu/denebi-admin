import React from 'react'

function CampaignInsert() {
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
                                <div className="tab-pane" id="tab6">
                                    <div className="row">
                                        <div className="col-6">
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
                                    </div>
                                    <div className="row mt-5">
                                        <div className="col-6">
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
                                    </div>

                                </div>
                                <div className="tab-pane" id="tab7">

                                </div>
                                <div className="tab-pane" id="tab8">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CampaignInsert