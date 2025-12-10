import React from "react";
import "../styles/Partners.css";

import { FaGamepad, FaCloud } from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { TbDeviceTvOld } from "react-icons/tb";
import { GiTShirt, GiOfficeChair } from "react-icons/gi";

export default function Partners() {
  return (
    <section id="partners" className="partners">
      <div className="container">
        <h2 className="section-title">PARTNERS & SPONSORS</h2>
        <p className="partners-desc">
          업계를 선도하는 브랜드들과 함께 최고를 추구합니다
        </p>

        <div className="partner-grid">
          <div className="partner-card">
            <div className="icon-box">
              <FaGamepad className="partner-icon purple" />
            </div>
            <h3>TechGear Pro</h3>
            <p className="label">하드웨어 파트너</p>
          </div>

          <div className="partner-card">
            <div className="icon-box">
              <AiOutlineThunderbolt className="partner-icon orange" />
            </div>
            <h3>Energy Boost</h3>
            <p className="label">공식 음료</p>
          </div>

          <div className="partner-card">
            <div className="icon-box">
              <TbDeviceTvOld className="partner-icon sky" />
            </div>
            <h3>StreamMax</h3>
            <p className="label">스트리밍 플랫폼</p>
          </div>

          <div className="partner-card">
            <div className="icon-box">
              <GiTShirt className="partner-icon lime" />
            </div>
            <h3>GameWear</h3>
            <p className="label">어패럴 파트너</p>
          </div>

          <div className="partner-card">
            <div className="icon-box">
              <GiOfficeChair className="partner-icon brown" />
            </div>
            <h3>ProChair</h3>
            <p className="label">가구 파트너</p>
          </div>

          <div className="partner-card">
            <div className="icon-box">
              <FaCloud className="partner-icon cloud" />
            </div>
            <h3>CloudHost</h3>
            <p className="label">기술 파트너</p>
          </div>
        </div>
        <div className="partner-cta">
          <h3>Become a Partner</h3>
          <p>
            e스포츠의 미래를 함께 만들어갑니다. SOO CURRENT의 파트너가 되어 전
            세계 수백만 팬들과 만나세요.
          </p>
          <button className="cta-btn">문의하기</button>
        </div>
      </div>
    </section>
  );
}
