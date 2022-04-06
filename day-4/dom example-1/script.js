function load() {
    const ul_il_tag = document.createElement("ul");
	for(i in data){
        var il=data[i];
        let il_text = document.createTextNode(il["il_adi"]);

        let li_il_tag = document.createElement("li");
        li_il_tag.appendChild(il_text);

        const ul_ilce_tag = document.createElement("ul");
        for(j in il["ilceler"]){
            var ilce=il["ilceler"][j];
            let ilce_text=document.createTextNode(ilce["ilce_adi"]);
            let li_ilce_tag = document.createElement("li");
            li_ilce_tag.appendChild(ilce_text);
            ul_ilce_tag.appendChild(li_ilce_tag);
        }
        li_il_tag.appendChild(ul_ilce_tag);
        ul_il_tag.appendChild(li_il_tag);
    }
    document.body.appendChild(ul_il_tag);
}
