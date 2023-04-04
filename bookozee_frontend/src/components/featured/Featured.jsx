import "./Featured.css";
import { useNavigate } from "react-router-dom";
const Featured = () => {
  const navigate = useNavigate();
  const HandleNavigate = (value) => {
    navigate("/hotels", {
      state: {
        destination: value,
        dates: [
          {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
          },
        ],
        options: {
          adult: 1,
          children: 0,
          room: 1,
        },
      },
    });
  };
  return (
    <div className="featured">
      <div className="firstbox">
        <div className="featuredItem" onClick={() => HandleNavigate("Delhi")}>
          <img
            src="https://cf.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o="
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitle">
            <h2>Delhi</h2>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAgVBMVEX///8AAAAAAAAAAAAAAAD////29vbo7Pfm6PTg5vTg5PLM2e7Gz+T1w5nAyuH1v5P0uoi2wt2zw+T0t4S0wNzzsnvysHn3rG2qtNqqs9nxp2rwomHwoV3unFjsl0/slUyLnciHmsd3jb8qm2MgmlkqlV8ellook10YlFUjj1gfjVULJqFEAAAABXRSTlMAESIzRJTdRHwAAACSSURBVHjardHLDoIwEIXhtlgQGctVvBVRqBR8/wd0FJuQdFyY+K9O5lsO+2ecDO+ajDOht0RngZCWXqlGaLKdV9YgtPVpbo99Zn1BkK4IIJIuhNDdiyQpnIQLALjeQBGQq65TOQHrI8BhQ4CMqyqWC7BmnDPGDG7aF/SDV39HmCiwbyCaEB5kgvFgRRTwrx/8vSeVOB6PJ+z3YAAAAABJRU5ErkJggg=="
              alt=""
            />
          </div>
        </div>
        <div
          className="featuredItem"
          onClick={() => HandleNavigate("Bangalore")}
        >
          <img
            src="https://cf.bstatic.com/xdata/images/city/600x600/684534.jpg?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o="
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitle">
            <h2>Bangalore</h2>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAgVBMVEX///8AAAAAAAAAAAAAAAD////29vbo7Pfm6PTg5vTg5PLM2e7Gz+T1w5nAyuH1v5P0uoi2wt2zw+T0t4S0wNzzsnvysHn3rG2qtNqqs9nxp2rwomHwoV3unFjsl0/slUyLnciHmsd3jb8qm2MgmlkqlV8ellook10YlFUjj1gfjVULJqFEAAAABXRSTlMAESIzRJTdRHwAAACSSURBVHjardHLDoIwEIXhtlgQGctVvBVRqBR8/wd0FJuQdFyY+K9O5lsO+2ecDO+ajDOht0RngZCWXqlGaLKdV9YgtPVpbo99Zn1BkK4IIJIuhNDdiyQpnIQLALjeQBGQq65TOQHrI8BhQ4CMqyqWC7BmnDPGDG7aF/SDV39HmCiwbyCaEB5kgvFgRRTwrx/8vSeVOB6PJ+z3YAAAAABJRU5ErkJggg=="
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="secondbox">
        <div className="featuredItem" onClick={() => HandleNavigate("Mumbai")}>
          <img
            src="https://cf.bstatic.com/xdata/images/city/600x600/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o="
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitle">
            <h2>Mumbai</h2>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAgVBMVEX///8AAAAAAAAAAAAAAAD////29vbo7Pfm6PTg5vTg5PLM2e7Gz+T1w5nAyuH1v5P0uoi2wt2zw+T0t4S0wNzzsnvysHn3rG2qtNqqs9nxp2rwomHwoV3unFjsl0/slUyLnciHmsd3jb8qm2MgmlkqlV8ellook10YlFUjj1gfjVULJqFEAAAABXRSTlMAESIzRJTdRHwAAACSSURBVHjardHLDoIwEIXhtlgQGctVvBVRqBR8/wd0FJuQdFyY+K9O5lsO+2ecDO+ajDOht0RngZCWXqlGaLKdV9YgtPVpbo99Zn1BkK4IIJIuhNDdiyQpnIQLALjeQBGQq65TOQHrI8BhQ4CMqyqWC7BmnDPGDG7aF/SDV39HmCiwbyCaEB5kgvFgRRTwrx/8vSeVOB6PJ+z3YAAAAABJRU5ErkJggg=="
              alt=""
            />
          </div>
        </div>
        <div className="featuredItem" onClick={() => HandleNavigate("Chennai")}>
          <img
            src="https://cf.bstatic.com/xdata/images/city/600x600/684730.jpg?k=e37b93d88c1fe12e827f10c9d6909a1def7349be2c68df5de885deaa4bc01ee3&o="
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitle">
            <h2>Chennai</h2>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAgVBMVEX///8AAAAAAAAAAAAAAAD////29vbo7Pfm6PTg5vTg5PLM2e7Gz+T1w5nAyuH1v5P0uoi2wt2zw+T0t4S0wNzzsnvysHn3rG2qtNqqs9nxp2rwomHwoV3unFjsl0/slUyLnciHmsd3jb8qm2MgmlkqlV8ellook10YlFUjj1gfjVULJqFEAAAABXRSTlMAESIzRJTdRHwAAACSSURBVHjardHLDoIwEIXhtlgQGctVvBVRqBR8/wd0FJuQdFyY+K9O5lsO+2ecDO+ajDOht0RngZCWXqlGaLKdV9YgtPVpbo99Zn1BkK4IIJIuhNDdiyQpnIQLALjeQBGQq65TOQHrI8BhQ4CMqyqWC7BmnDPGDG7aF/SDV39HmCiwbyCaEB5kgvFgRRTwrx/8vSeVOB6PJ+z3YAAAAABJRU5ErkJggg=="
              alt=""
            />
          </div>
        </div>
        <div className="featuredItem" onClick={() => HandleNavigate("Jaipur")}>
          <img
            src="https://cf.bstatic.com/xdata/images/city/600x600/684657.jpg?k=66dc5035b43e9bb86b756e381e4fec2558064af4a63a8af17836725a854c03ee&o="
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitle">
            <h2>Jaipur</h2>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAgVBMVEX///8AAAAAAAAAAAAAAAD////29vbo7Pfm6PTg5vTg5PLM2e7Gz+T1w5nAyuH1v5P0uoi2wt2zw+T0t4S0wNzzsnvysHn3rG2qtNqqs9nxp2rwomHwoV3unFjsl0/slUyLnciHmsd3jb8qm2MgmlkqlV8ellook10YlFUjj1gfjVULJqFEAAAABXRSTlMAESIzRJTdRHwAAACSSURBVHjardHLDoIwEIXhtlgQGctVvBVRqBR8/wd0FJuQdFyY+K9O5lsO+2ecDO+ajDOht0RngZCWXqlGaLKdV9YgtPVpbo99Zn1BkK4IIJIuhNDdiyQpnIQLALjeQBGQq65TOQHrI8BhQ4CMqyqWC7BmnDPGDG7aF/SDV39HmCiwbyCaEB5kgvFgRRTwrx/8vSeVOB6PJ+z3YAAAAABJRU5ErkJggg=="
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
