import { Unity, useUnityContext } from "react-unity-webgl";

const SmashGame = ({ data }) => {
  console.log(data);
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "/SmashWeb/Build/SmashWeb.loader.js",
    dataUrl: "/SmashWeb/Build/SmashWeb.data.unityweb",
    frameworkUrl: "/SmashWeb/Build/SmashWeb.framework.js.unityweb",
    codeUrl: "/SmashWeb/Build/SmashWeb.wasm.unityweb",
  });

  return (
    <>
      {!isLoaded && <div>Loading {Math.round(loadingProgression * 100)}%</div>}
      <div className="flex items-center justify-center ">
        <div style={{ width: "550px", height: "720px" }}>
          <Unity
            style={{ width: "100%", height: "100%" }}
            unityProvider={unityProvider}
            devicePixelRatio={3}
          />
        </div>
      </div>
    </>
  );
};

export default SmashGame;
