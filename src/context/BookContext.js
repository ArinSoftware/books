import React from "react";

export const BookContext = React.createContext();




// ilk yöntemde default value kullanıcaz. Yani contexti oluştururken bir başlangıç degeri tanımlicaz. Bu bir nesne array yada degişken olabilir. Ve bu varsayılan degeri ilgili componente this.context ile ileticez. 

// ikinci yöntemde ise Provider , Consumer kullanıcaz. 