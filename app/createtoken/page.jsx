import React from 'react'

const CreateToken = () => {
  return (
    <>
    <section className="register_section section_decoration">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-5 position-relative">
        <div className="register_form">
          <h1 className="heading_text text-center">
            Create Your Solana Meme Token
          </h1>
          <div className="divider">
            <img src="assets/images/shapes/shape_divider.svg" alt="Divider" />
          </div>
          <div className="form-group position-relative">
            <input
              id=""
              className="form-control"
              type="text"
              name="token"
              placeholder="Enter token name (eg mooncoin)"
              required=""
            />
            <i
              className="fa fa-info-circle info-icon"
              data-bs-container="body"
              data-bs-toggle="popover"
              data-bs-placement="right"
              data-bs-content="Right popover df vhwd erohio htioehtio ehoi heiothio ehioet ioheoth oiehtheo thoeit"
            />
          </div>
          <div className="form-group position-relative">
            <input
              id=""
              className="form-control"
              type="text"
              name="token"
              placeholder="Enter token symbol (eg MOON)"
              required=""
            />
            <i
              className="fa fa-info-circle info-icon"
              data-bs-container="body"
              data-bs-toggle="popover"
              data-bs-placement="right"
              data-bs-content="Right popover df vhwd erohio htioehtio ehoi heiothio ehioet ioheoth oiehtheo thoeit"
            />
          </div>
          <div className="form-group position-relative">
            <input
              id=""
              className="form-control"
              type="text"
              name="token"
              placeholder="Enter total supply (eg 100000)"
              required=""
            />
            <i
              className="fa fa-info-circle info-icon"
              data-bs-container="body"
              data-bs-toggle="popover"
              data-bs-placement="right"
              data-bs-content="Right popover df vhwd erohio htioehtio ehoi heiothio ehioet ioheoth oiehtheo thoeit"
            />
          </div>
          <div className="form-group">
            <textarea
              id=""
              className="form-control mb-0"
              placeholder="Enter a short token description (max 200 chars)"
              defaultValue={""}
            />
          </div>
          <div className="form-group">
            <select className="form-control">
              <option>Meme Coin</option>
            </select>
          </div>
          <div className="form-group upload-logo">
            <label className="input_title" htmlFor="input_pass">
              Token Logo
            </label>
            <input type="file" />
          </div>
          <div className="form-group">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkbox_remember_me"
              />
              <label
                className="form-check-label"
                htmlFor="checkbox_remember_me"
              >
                Enable Auto Liquidity
              </label>
            </div>
          </div>
          <div className="showmore">
            <div className="form-group">
              <select className="form-control">
                <option>Standerd(You provide Equidity)</option>
              </select>
            </div>
            <div className="form-group">
              <input
                id=""
                className="form-control"
                type="text"
                name=""
                placeholder=""
              />
            </div>
          </div>
          <button className="btn" type="submit">
            <span className="btn_label">Create Token</span>
            <span className="btn_icon">
              <i className="fa-regular fa-arrow-up-right" />
            </span>
          </button>
        </div>
        <div className="decoration_item shape_flower">
          <img src="assets/images/shapes/shape_flower_1.svg" alt="Flower" />
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default CreateToken