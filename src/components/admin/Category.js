import axios from "axios";
import React, { useState } from "react";
import swal from "sweetalert";
import Footer from "../../layouts/admin/Footer";
import Navbar from "../../layouts/admin/Navbar";
import Sidebar from "../../layouts/admin/Sidebar";

function Category() {

    const [categoryInput, setCategory] = useState({
        slug: '',
        name: '',
        description: '',
        status: '',
        meta_title: '',
        meta_keywords: '',
        meta_description: '',
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setCategory({...categoryInput, [e.target.name]: e.target.value })
    }

    const submitCategory = (e) => {
        e.preventDefault();

        const data = {
            slug: categoryInput.slug,
            name: categoryInput.name,
            description: categoryInput.description,
            status: categoryInput.status,
            meta_title: categoryInput.meta_title,
            meta_keywords: categoryInput.meta_keywords,
            meta_description: categoryInput.meta_description,
        }

        axios.post(`/api/store-category`, data).then(res => {
            if(res.data.status === 200) {
                swal("Success", res.data.message, "success");
                document.getElementById('category_form').reset();
            } else if(res.data.status === 400) {
                setCategory({...categoryInput, error_list:res.data.errors});
            }
        });
    }

    return(
        <div className="sb-nav-fixed">
            <Navbar />

            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Sidebar />
                </div>

                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid px-4">
                            <h1 className="mt-4 mb-4">Add Category</h1>
                            <form onSubmit={submitCategory} id="category_form">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Home</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="seo-tags-tab" data-bs-toggle="tab" data-bs-target="#seo-tags" type="button" role="tab" aria-controls="seo-tags" aria-selected="false">SEO Tags</button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane card-body border p-3 fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                                        <div className="form-group mb-3">
                                            <label className="form-label">Category Slug</label>
                                            <input type="text" name="slug" onChange={handleInput} value={categoryInput.slug} className="form-control" placeholder="Category Slug" />
                                            <span className="text-danger">{categoryInput.error_list.slug}</span>
                                        </div>
                                        <div className="form-group mb-3">
                                            <label className="form-label">Category Name</label>
                                            <input type="text" name="name" onChange={handleInput} value={categoryInput.name} className="form-control" placeholder="Category Name" />
                                            <span className="text-danger">{categoryInput.error_list.name}</span>
                                        </div>
                                        <div className="form-group mb-3">
                                            <label className="form-label">Category Description</label>
                                            <textarea name="description" onChange={handleInput} value={categoryInput.description} placeholder="Category Description" className="form-control" />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label className="form-label">Category Status</label>
                                            <input type="checkbox" onChange={handleInput} value={categoryInput.status} className="form-check-input mx-2" name="status" /> Status 0 = Show & Status 1 = hidden
                                        </div>
                                    </div>

                                    <div className="tab-pane card-body border p-3 fade" id="seo-tags" role="tabpanel" aria-labelledby="seo-tags-tab" tabindex="0">
                                        <div className="form-group mb-3">
                                            <label className="form-label">Meta Title</label>
                                            <input type="text" name="meta_title" onChange={handleInput} value={categoryInput.meta_title} className="form-control" placeholder="Meta Title" />
                                            <span className="text-danger">{categoryInput.error_list.meta_title}</span>
                                        </div>
                                        <div className="form-group mb-3">
                                            <label className="form-label">Meta Keywords</label>
                                            <textarea name="meta_keywords" onChange={handleInput} value={categoryInput.meta_keywords} placeholder="Meta Keywords" className="form-control" />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label className="form-label">Meta Description</label>
                                            <textarea name="meta_description" onChange={handleInput} value={categoryInput.meta_description} placeholder="Meta Description" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary px-4 mt-2">Submit</button>
                            </form>
                        </div>
                    </main>

                    <Footer/>
                </div>
            </div>
        </div>
    );
}

export default Category;