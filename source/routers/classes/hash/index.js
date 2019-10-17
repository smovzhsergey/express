export const getByHash = (req, res) => {
    try {
        res.status(200).json({ data: {} });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateByHash = (req, res) => {
    try {
        res.status(200).json({ hash: 'hash' });
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

export const enroll = (req, res) => {
    try {
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const expel = (req, res) => {
    try {
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};