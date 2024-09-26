import { useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const SmashGame = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);

  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "/SmashWeb/Build/SmashWeb.loader.js",
    dataUrl: "/SmashWeb/Build/SmashWeb.data.unityweb",
    frameworkUrl: "/SmashWeb/Build/SmashWeb.framework.js.unityweb",
    codeUrl: "/SmashWeb/Build/SmashWeb.wasm.unityweb",
    streamingAssetsUrl: "StreamingAssets",
    companyName: "DC LABS",
    productName: "Monster Mountain",
  });



  return (
    <>
      {
        !isLoaded && (
          <div>
            Loading {
Math.round(loadingProgression * 100)            }%
          </div>
        )
  }
<div style={{ width: "550px", height: "320px" }}>
      <Unity
        style={{ width: "100%", height: "100%" }}
        unityProvider={unityProvider}
        devicePixelRatio={3}
      />
    </div>

    </>);
};

export default SmashGame;
