import React, { useState } from 'react'
import GraphChart from '../Chart/GraphChart'
import BasicBar from '../Chart/BasicBar'

function AdminHomePage() {
    const [campaign, setCampaign] = useState('weekly')
    return (
        <div >
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
                                            <h6 className="">Toplam Kullanıcı</h6>
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
                                            <h6 className="">Yeni Kullanıcı</h6>
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
                                            <h6 className="">Gönderilen Fiş</h6>
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
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-8">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Kampanya yayınlayan işletmeler</h3>
                            <div className="btn btn-primary me-3" style={{ borderColor: '#6C5FFC', right: '80px', position: 'absolute', backgroundColor: campaign === 'weekly' ? '#6C5FFC' : 'white', color: campaign === 'weekly' ? 'white' : '#6C5FFC' }} onClick={() => setCampaign('weekly')} >Haftalık</div>
                            <div className="btn btn-primary " style={{ borderColor: '#6C5FFC', backgroundColor: '#6C5FFC', right: '15px', position: 'absolute', backgroundColor: campaign === 'monthly' ? '#6C5FFC' : 'white', color: campaign === 'monthly' ? 'white' : '#6C5FFC' }} onClick={() => setCampaign('monthly')} >Aylık</div>
                        </div>
                        <div className="card-body">
                            <GraphChart />
                        </div>
                    </div>
                </div>
                {/* COL END */}
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-4">
                    <div className="card overflow-hidden">
                        <div className="card-header">
                            <h4 className="card-title fw-semibold">Toplan Satılan Puan </h4>
                        </div>
                        <div className="card-body pb-0">
                            <BasicBar />
                        </div>
                    </div>
                </div>
                {/* COL END */}
            </div>
        </div >
    )
}

export default AdminHomePage