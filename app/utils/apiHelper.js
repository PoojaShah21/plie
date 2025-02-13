import BaseSetting from '../config/setting';
import {store} from '../redux/store/configureStore';

export function getApiDataProgress(
  endpoint,
  method,
  data = {},
  headers = {},
  onProgress,
) {
  return new Promise((resolve, reject) => {
    const url = `${BaseSetting.api}${endpoint}`;
    const xhr = new XMLHttpRequest();

    // Handle upload progress
    xhr.upload.addEventListener('progress', event => {
      if (event.lengthComputable && typeof onProgress === 'function') {
        const progress = (event.loaded / event.total) * 100;
        onProgress(progress);
      }
    });

    // Prepare form data
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      formData.append(key, data[key]);
    });

    // Configure request
    xhr.open(method.toUpperCase(), url, true);

    // Authorization header
    const token = store?.getState()?.auth?.accessToken;
    if (token) {
      xhr.setRequestHeader('Authorization', `Bearer ${token}`);
    }

    // Set headers (excluding 'Content-Type' for FormData)
    Object.entries(headers).forEach(([key, value]) => {
      if (key.toLowerCase() !== 'content-type') {
        xhr.setRequestHeader(key, value);
      }
    });

    // Handle response
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          const response = JSON.parse(xhr.responseText);
          resolve(response);
        } catch (error) {
          console.error('Response Parsing Error:', error);
          reject(error);
        }
      } else {
        console.error('HTTP Error:', xhr.status, xhr.responseText);
        reject(new Error(xhr.responseText));
      }
    };

    xhr.onerror = () => {
      console.error('Network Error');
      reject(new Error('Network Error'));
    };

    xhr.send(formData);
  });
}
