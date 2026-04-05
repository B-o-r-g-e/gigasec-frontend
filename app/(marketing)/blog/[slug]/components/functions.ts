type sectionTypes = {
    heading: string;
    body: string;
};

export function slugify(text: string) {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
}

export function generateUniqueId(sections: sectionTypes[]) {
    const used = new Set()

    return sections.map(section => {
        const base = slugify(section.heading)
        let id = base
        let count = 1

        while (used.has(id)) {
            id = `${base}-${count++}`
        }

        used.add(id);
        // console.log(used)
        return {...section, id}
    })
}
