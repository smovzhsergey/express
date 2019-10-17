export const getByHash = (req, res) => {
    try {
        res.status(200).json({ data: {} });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


export const updateByHash = (req, res) => {    
    try {
        res.status(200).json({ hash: 'lesson_hash' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteByHash = (req, res) => {
    try {
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getVideos = (req, res) => {
    try {
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getVideoByHash = (req, res) => {
    try {
        res.status(200).json({ data: {} });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteVideoByHash = (req, res) => {
    try {
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getKeynotes = (req, res) => {
    try {
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getKeynoteByHash = (req, res) => {
    try {
        res.status(200).json({ data: {} });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteKeynoteByHash = (req, res) => {
    try {
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};