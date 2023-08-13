import { trackers } from "./utils";

export const useMagnet = () => {
  const getMagnetLink = (hash: string, title: string) => {
    const dn = encodeURIComponent(title);
    return `magnet:?xt=urn:btih:${hash}&dn=${dn}&tr=${trackers.join("&tr=")}`;
  };

  const getDimension = (dimension: string): string => {
    const bytes = parseInt(dimension, 10);
    if (isNaN(bytes) || bytes === 0) return "0 Byte";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return { getMagnetLink, getDimension };
};

