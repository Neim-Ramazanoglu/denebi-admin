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
                                                                            <option value="br">Brazil</option>
                                                                            <option value="cz">Czech Republic</option>
                                                                            <option value="de">Germany</option>
                                                                            <option value="pl">Poland </option>
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
                                    <span
                                        className="avatar avatar-xl brround cover-image"
                                        style={{ background: 'url("https://picsum.photos/150/150") center center' }}
                                    >
                                        <label className="badge rounded-pill avatar-icons bg-yellow"
                                            data-kt-image-input-action="change"
                                            data-bs-toggle="tooltip"
                                            title=""
                                            data-bs-original-title="Change avatar"
                                            style={{ width: '25px', height: '25px' }}
                                        >
                                            <i className="fe fe-bell fs-12" />
                                            <input type="file" name="avatar" accept=".png, .jpg, .jpeg" style={{ display: 'none' }} />
                                        </label>
                                    </span>

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