import useSWR from 'swr';

export function useImage<Data = any>(url: string) {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "l1aRhzY4yk2xps1ToB3K6Ds7PXekRSd7PEWXr7lTbL1UmUVu62LGUfiA");
  myHeaders.append("Cookie", "__cf_bm=aiA2HV8wuozSXKdCISxZpJsomjF88e0Z4DvMDWI5fYo-1682107088-0-AVKAiVEPrMwW4cut0I133Fl7YI9ELnMkfJ8KX6lTHgaMZR8zShx0KjOdX0EsEmehQPD4wQcsMt9e/Hd4IPq8NEI=");
    const { data, error } = useSWR<Data>(url, async () => {
    const response = await fetch(url, {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
  });
    const data = response.json()
    return data
  });

  return { data, error };
}